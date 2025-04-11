from flask import Flask
from flask import request, jsonify
from scanners import check_headers
from utils import category
app = Flask(__name__)

@app.route("/")
def index():
    return "Hello, World!"

@app.route("/header-scanner", methods=["POST"])
def header_scanner():
    url = request.json["url"]
    result = check_headers(url)
    print(result)
    return jsonify(result)

@app.route("/site-category", methods=["POST"])
def site_category():
    url = request.json["url"]
    result = category(url)
    print(result)
    return jsonify(result)

@app.route("/sql-injection-scanner", methods=["POST"])
def sql_injection():
    url = request.args.get("url")


if __name__ == "__main__":
    app.run(debug=True,host="0.0.0.0")