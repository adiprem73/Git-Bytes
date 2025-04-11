from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
import streamlit as st
import os
from langchain_community.llms import Ollama
from dotenv import load_dotenv

load_dotenv()
# for langsmith tracking
os.environ["LANGCHAIN_API_KEY"] = os.getenv("LANGSMITH_API_KEY")
os.environ["LANGCHAIN_PROJECT"] = os.getenv("LANGSMITH_PROJECT")
os.environ["LANGCHAIN_TRACING_V2"] = os.getenv("LANGSMITH_TRACING")

prompt = ChatPromptTemplate.from_messages(
    [
        ("system", "You are a helpful assistant."),
        ("user", "Question : {input}"),
    ]
)

st.title("Chat")
input_text = st.text_input("Enter your question:")

llm = Ollama(model="mistral")
output_parser = StrOutputParser()
llm_chain = prompt | llm | output_parser
if input_text:
    response = llm_chain.invoke({"input": input_text})
    st.write("Response:", response)