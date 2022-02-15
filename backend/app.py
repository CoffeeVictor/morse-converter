from flask import Flask, make_response, request
from flask_cors import CORS

from src.libs.morse import morse_to_str

app = Flask(__name__)
CORS(app)

@app.route('/', methods = ['POST'])
def hw():
    json = request.get_json()
    message = json['message']

    try:
      return {
            'plain_text_message': morse_to_str(message)
        }
    except KeyError:
        return make_response('Invalid Morse Code', 400)


app.run(debug=True)
