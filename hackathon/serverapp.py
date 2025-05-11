# server/app.py
from flask import Flask, request, jsonify
import openai
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

openai.api_key = "YOUR_OPENAI_API_KEY"

@app.route("/generate-questions", methods=["POST"])
def generate_questions():
    tech_stack = request.json.get("techStack")
    prompt = f"Generate 5 coding and 5 HR interview questions for a developer skilled in {tech_stack}."
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}]
    )
    return jsonify({"questions": response['choices'][0]['message']['content']})

if __name__ == "__main__":
    app.run(debug=True)
