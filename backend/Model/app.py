from flask import Flask, request, jsonify, render_template
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn import svm
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app)

# Route for the home page
@app.route('/')
def home():
    return render_template('index.html')

# mera kaaam
@app.route('/test', methods=['GET'])
def test():
    return 'test'

# Route for uploading the CSV file and training the model
@app.route('/train1', methods=['POST'])
def train():
    file = request.files['file']
    if not file:
        return "No file uploaded", 400
    
    # Read the CSV file into a DataFrame
    data = pd.read_csv(file)



    # # Handle zero values by replacing them with NaN and then imputing
    # columns_to_check = ['Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', 'BMI']
    # data[columns_to_check] = data[columns_to_check].replace(0, np.nan)
    # data.fillna(data.mean(), inplace=True)
    
    
    # Assume the last column is the target variable
    X = data.iloc[:, :-1]
    y = data.iloc[:, -1]
    
    # Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    # Train a logistic regression model
    logistic_model = LogisticRegression(max_iter=1000)
    logistic_model.fit(X_train, y_train)

    # Train a support vector machine model
    svm_model = svm.SVC(kernel='linear')
    svm_model.fit(X_train, y_train)

    # Evaluate both models
    log_pred = logistic_model.predict(X_test)
    svm_pred = svm_model.predict(X_test)
    
    log_accuracy = accuracy_score(y_test, log_pred)
    svm_accuracy = accuracy_score(y_test, svm_pred)
    
    # Save the trained model to a file
    with open('log_model.pkl', 'wb') as f:
        pickle.dump(logistic_model, f)

    with open('svm_model.pkl', 'wb') as f:
        pickle.dump(svm_model, f)
    
    return jsonify({
        "logistic_regression": log_accuracy,
        "svm": svm_accuracy
    })


# Route for making predictions from API
@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    if not data:
        return "No data provided", 400
    
    # Load the trained model
    with open('log_model.pkl', 'rb') as f:
        log_model = pickle.load(f)
    
    with open('svm_model.pkl', 'rb') as f:
        svm_model = pickle.load(f)
    
    # Convert the data to a DataFrame
    # input_data = pd.DataFrame(data)
    
    # # Make predictions
    # log_predictions = log_model.predict(input_data)
    # svm_predictions = svm_model.predict(input_data)

    
    # # return jsonify(log_predictions.tolist())
    # # return jsonify({
    # #     "logistic_regression": log_predictions.tolist(),
    # #     "svm": svm_predictions.tolist()
    # # })


# Route for checking diabetes from form input
@app.route('/check', methods=['POST'])
def check():
    # Collect form data
    print("hello",request.json)
    reqData=request.json

    pregnancies = reqData['pregnancies']
    glucose = reqData['glucose']
    bloodpressure = reqData['bloodpressure']
    skinthickness =reqData['skinthickness']
    insulin = reqData['insulin']
    bmi = reqData['bmi']
    dpf = reqData['dpf']
    age = reqData['age']
    
    # Prepare the input data for the model
    input_data = pd.DataFrame([[pregnancies, glucose, bloodpressure, skinthickness, insulin, bmi, dpf, age]],
                              columns=['Pregnancies', 'Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', 'BMI', 'DiabetesPedigreeFunction', 'Age'])
    
    # Load the trained logistic regression model
    with open('log_model.pkl', 'rb') as f:
        log_model = pickle.load(f)

    # Load the trained SVM model
    with open('svm_model.pkl', 'rb') as f:
        svm_model = pickle.load(f)


    # Make a prediction
    log_prediction = log_model.predict(input_data)[0]
    svm_prediction = svm_model.predict(input_data)[0]
    
    log_result = "Diabetic" if log_prediction == 1 else "Not Diabetic"
    svm_result = "Diabetic" if svm_prediction == 1 else "Not Diabetic"
    
    return jsonify({
         "logistic_regression": log_result,
         "svm": svm_result
     })

if __name__ == '__main__':
    app.run(debug=True)
