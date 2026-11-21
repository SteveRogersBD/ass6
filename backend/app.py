from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

items = [
    {
        "id": 1,
        "item": "Water Bottle",
        "location": "Violette Hall",
    },
    {
        "id": 2,
        "item": "Calculator",
        "location": "Library",
    },
    {
        "id": 3,
        "item": "Backpack",
        "location": "Student Union",
    },
    {
        "id": 4,
        "item": "Blue Umbrella",
        "location": "Student Recreation Center",
    },
]


@app.route("/api/items", methods=["GET"])
def get_items():
    return jsonify(items)
