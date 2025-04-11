from langserve import add_routes
from config.models import llm
from prompts.category import prompt
"""
http://localhost:8000/category/invoke
{
  "input": {
    "title": "...",
    "description": "...",
    "keywords": "..."
  }
}
"""
def add_category_route(app):
    add_routes(
        app,
        prompt | llm,
        path="/category",
    )