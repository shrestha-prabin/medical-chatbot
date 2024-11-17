import os

from dotenv import load_dotenv
from huggingface_hub import InferenceClient

load_dotenv()

HUGGINGFACE_API_KEY = os.environ.get("HUGGINGFACE_API_KEY")

client = InferenceClient(api_key=HUGGINGFACE_API_KEY)


def chat(query):
    content = f"""
    Answer this medical question. {query}. Give answer in 100 words or less.
    If the query is not related to medical field, don't give any answer.
    """
    messages = [
        {
            "role": "user",
            "content": content,
        }
    ]

    response = client.chat.completions.create(
        model="meta-llama/Meta-Llama-3-8B-Instruct",
        messages=messages,
        max_tokens=500,
        stream=False,
    )

    return response.choices[0].message.content
