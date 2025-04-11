from langserve import add_routes
from config.models import llm
from prompts.chatbot import prompt
"""
http://localhost:8000/chatbot/invoke
{
  "input": {
    "user_input": "..."
  }
}
"""
def add_chatbot_route(app):
    add_routes(
        app,
        prompt | llm,
        path="/chatbot",
    )