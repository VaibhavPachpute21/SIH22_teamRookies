from flask import Flask, render_template, request
import pandas as pd
import numpy as np


app = Flask(__name__)
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/addData',methods=['POST'])
def addData(data):
    obj = request.get_json()
    print(obj)
    return 'ok',200


if __name__ == '__main__':
    app.run(debug=True)