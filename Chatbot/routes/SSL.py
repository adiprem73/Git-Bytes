from langserve import add_routes
from config.models import llm
from prompts.SSL import prompt

"""
http://localhost:8000/SSL/invoke
{
  "input": {
    "status":"success",
    "category":"Sports"
  }
}
"""
def add_ssl_route(app):
    add_routes(
        app,
        prompt | llm,
        path="/SSL",
    )