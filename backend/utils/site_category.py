import requests
from bs4 import BeautifulSoup

LLM_SERVER = "http://localhost:8000/category/invoke"

def category(url):
    try:
        response = requests.get(url)
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

        description = meta_tags.get("description",None) if meta_tags else None
        keywords = meta_tags.get("keywords",None) if meta_tags else None

        response = requests.post(LLM_SERVER,json=
                {
                    "input": {
                    "title": title if title else "Not found",
                    "description": description if description else "Not found",
                    "keywords": keywords if keywords else "Not found",
                            }
                }
            )

        return {
                "category":response.json()["output"]
                }

    except Exception as e:
        print("Error communicating with LLM:", e)
        return {"category":"Other"}
