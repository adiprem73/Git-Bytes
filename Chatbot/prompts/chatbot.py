from langchain.prompts import ChatPromptTemplate

from langchain.prompts import ChatPromptTemplate

prompt = ChatPromptTemplate.from_messages([
    ("system", 
     "You are a cybersecurity expert. Reply in MAX 2 SHORT sentences. "
     "Prioritize: Clear answer and Actionable step. "
     "Never exceed 15 words per sentence."
     "Generate a single like response as conversing with a human, No points or numbers. "),
    
    ("human", "{user_input}")
])