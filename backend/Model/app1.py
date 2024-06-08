# app.py
from flask import Flask, request, jsonify, render_template
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
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
    
    # Assume the last column is the target variable
    X = data.iloc[:, :-1]
    y = data.iloc[:, -1]
    
    # Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    # Train a logistic regression model
    model = LogisticRegression(max_iter=1000)
    model.fit(X_train, y_train)
    
    # Save the trained model to a file
    with open('model.pkl', 'wb') as f:
        pickle.dump(model, f)
    
    return "Model trained successfully"

# Route for making predictions from API
@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    if not data:
        return "No data provided", 400
    
    # Load the trained model
    with open('model.pkl', 'rb') as f:
        model = pickle.load(f)
    
    # Convert the data to a DataFrame
    input_data = pd.DataFrame(data)
    
    # Make predictions
    predictions = model.predict(input_data)
    
    return jsonify(predictions.tolist())

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
    
    # Load the trained model
    with open('model.pkl', 'rb') as f:
        model = pickle.load(f)
    
    # Make a prediction
    prediction = model.predict(input_data)[0]
    
    result = "Diabetic" if prediction == 1 else "Not Diabetic"
    
    # return render_template('result.html', result=result)

    return result

if __name__ == '__main__':
    app.run(debug=True)
