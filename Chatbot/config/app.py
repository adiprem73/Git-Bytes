from fastapi import FastAPI

app = FastAPI(
    title="LLM server",
    description="A server to access LLM models",
    version="1.0"
)