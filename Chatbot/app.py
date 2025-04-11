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
    "\nCategory:"
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

if __name__ == "__main__":
    uvicorn.run(app,host="0.0.0.0", port=8000)