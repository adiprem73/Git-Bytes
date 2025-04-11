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
    "If the user is a developer, provide a detailed explanation of the issues caused by the missing headers, "
    "the security or performance risks involved, and how to implement fixes. \n"
    "If the user is not a developer, provide a simple explanation of why these headers are important "
    "without using too many technical terms.\n\n"
    "Response:"
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