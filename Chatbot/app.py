from fastapi import FastAPI
from langchain.prompts import ChatPromptTemplate
from langserve import add_routes
import uvicorn
from langchain_community.llms import Ollama

app = FastAPI(
    title="LLM server",
    description="A server to access LLM models",
    version="1.0"
)

llm = Ollama(model="mistral")
promptCat = ChatPromptTemplate.from_template(
    "Classify the following website based on its metadata:\n"
    "Title: {title}\n"
    "Description: {description}\n"
    "Keywords: {keywords}\n"
    "\nChoose the most appropriate category from the following:\n"
    "- E-commerce\n"
    "- News & Media\n"
    "- Technology\n"
    "- Entertainment\n"
    "- Education\n"
    "- Health & Wellness\n"
    "- Finance\n"
    "- Government\n"
    "- Sports\n"
    "- Other (Specify why)\n"
    "\nOutput strictly just the category name without any extra text,or explanation."
)

promptHeaders = ChatPromptTemplate.from_template(
    "You are analyzing a website's metadata and missing headers.\n"
    "Category: {category}\n"
    "Missing Headers: {missing_headers}\n"
    "Is Developer: {is_developer}\n\n"
    
    "Response MUST contain:\n"
    "1. Severity score X out of 10 based on how safe is the site(high for safest)"
    "2. only three very short findings\n"
    
    "Format EXACTLY like this:\n"
    "[X]/10\n"
    "[[finding description]]\n"
    "[[finding description]]\n"
    "[[finding description]]\n\n"
    
    "Example output format:\n"
    "8\n"
    "Prepared statements used in most queries\n"
    "Input validation on search form\n"
    "Potential SQL injection in admin panel\n\n"
)

# http://localhost:8000/category/invoke
# {
#   "input": {
#     "title": "...",
#     "description": "...",
#     "keywords": "..."
#   }
# }
add_routes(
    app,
    promptCat|llm,
    path="/category",
)

add_routes(
    app,
    promptHeaders|llm,
    path="/header",
)

if __name__ == "__main__":
    uvicorn.run(app,host="0.0.0.0", port=8000)