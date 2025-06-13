# prompts/__init__.py
"""
Prompt Templates Package
"""
from .category import prompt as category_prompt
from .headers import prompt as headers_prompt
from .SSL import prompt as ssl_prompt
from .chatbot import prompt as chatbot_prompt

__all__ = ['category_prompt', 'headers_prompt', 'ssl_prompt', 'chatbot_prompt']