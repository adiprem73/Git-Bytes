import requests
from bs4 import BeautifulSoup

def category(url):
    try:
        response = requests.get(url)
        response.raise_for_status()

        soup = BeautifulSoup(response.text, "html.parser")

        title = soup.title.string.strip() if soup.title else None
        meta_tags = {}
        for meta in soup.find_all("meta"):
            name = meta.get("name","").lower()
            props = meta.get("property","").lower()
            content = meta.get("content","").strip()

            key = name or props
            if key and content:
                meta_tags[key] = content
    except Exception as e:
        title = None
        meta_tags = {}

    description = meta_tags.get("description",None) if meta_tags else None
    keywords = meta_tags.get("keywords",None) if meta_tags else None
    return {
        "title": title,
        "description": description,
        "keywords": keywords,
        "url": url,
        "other_metadata": meta_tags if title is None and description is None else None,
    }
