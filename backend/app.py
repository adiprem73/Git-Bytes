from flask import Flask
from flask import request, jsonify
from scanners import check_headers
import validators

app = Flask(__name__)

@app.route("/")
def index():
    return "Hello, World!"

@app.route("/header-scanner", methods=["POST"])
def header_scanner():
    url = request.json["url"]

    if not url or not validators.url(url):
        return jsonify({"error": "Invalid URL"}), 400

    result = check_headers(url)
    return jsonify(result)

@app.route("/sql-injection-scanner", methods=["POST"])
def sql_injection():
    url = request.args.get("url")


if __name__ == "__main__":
    app.run(debug=True,host="0.0.0.0")