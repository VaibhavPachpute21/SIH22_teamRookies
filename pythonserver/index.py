from flask import Flask, render_template, request
import pandas as pd
import numpy as np
import pymongo

   
   
# establishing connection
# to the database
client = pymongo.MongoClient("mongodb://localhost:27017/")
   
# Database name
db = client["grievance"]
   
# Collection name
col = db["feedbacks"]
 


app = Flask(__name__)

def AnalyseData(data):
    officers = []
    happy_resonse_time = []
    for y in data:
        officers.append(y['most_helpful_officer'])
        happy_resonse_time.append(y['happy_with_response_time'] > 2)

    
        

    helpful = pd.DataFrame(officers)
    most_helpful = helpful.value_counts()

    no_of_happy = pd.DataFrame(happy_resonse_time)
    counts = no_of_happy[no_of_happy == True].value_counts()
    percentage_happy = (counts / 5) * 100

    
    # percentage_happy[1]

    





    

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/addData',methods=['GET'])
def addData():
    data = []
    for x in col.find({}):
        data.append(x)
        AnalyseData(data)

    return 'ok',200


if __name__ == '__main__':
    app.run(debug=True)