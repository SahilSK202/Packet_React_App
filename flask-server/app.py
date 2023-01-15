
from flask import Flask, render_template, request, session


app = Flask(__name__)
app.secret_key = "123"


@app.route('/members', methods=['GET', 'POST'])
def members():
    return {"members": ["member1", "member2", "member3"]}


if __name__ == '__main__':
    app.run(debug=True, port=5000)
