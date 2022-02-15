from flask import Flask, request

from src.libs.morse import morse_to_str

app = Flask(__name__)

@app.route('/', methods = ['POST'])
def hw():
    json = request.get_json()
    message = json['message']

    return {
        'plain_text_message': morse_to_str(message)
    }


app.run(debug=True)
