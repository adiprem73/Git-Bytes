import requests
from bs4 import BeautifulSoup

def get_csrf_token(url, session=None):
    """
    Fetch a CSRF token from:
    1. Hidden form fields (e.g., <input name="csrf_token">)
    2. Meta tags (e.g., <meta name="csrf-token">)
    3. Cookies (e.g., "csrftoken")
    """
    session = session or requests.Session()
    
    # Fetch the page
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }
    response = session.get(url, headers=headers)
    response.raise_for_status()

    # Parse HTML for CSRF token
    soup = BeautifulSoup(response.text, "html.parser")
    
    # Check form inputs
    csrf_input = soup.find("input", {"name": ["csrf_token", "csrfmiddlewaretoken", "authenticity_token"]})
    if csrf_input and csrf_input.get("value"):
        return csrf_input["value"]
    
    # Check meta tags
    meta_token = soup.find("meta", {"name": ["csrf-token", "csrf_token"]})
    if meta_token and meta_token.get("content"):
        return meta_token["content"]
    
    # Check cookies
    if "csrftoken" in session.cookies:
        return session.cookies["csrftoken"]
    
    raise ValueError("CSRF token not found in HTML or cookies")
