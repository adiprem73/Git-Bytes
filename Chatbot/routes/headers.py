from langserve import add_routes
from config.models import llm
from prompts.headers import prompt
"""
http://localhost:8000/headers/invoke
{
  "input": {
    "category":"...",
    "missing_headers":"...",
    "is_developer": "..."
  }
}
"""
def add_headers_route(app):
    add_routes(
        app,
        prompt | llm,
        path="/headers",
    )