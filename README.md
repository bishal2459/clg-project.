# Diabetes Prediction Webapp

Welcome to the Diabetes Prediction Webapp, a comprehensive application designed to predict the likelihood of diabetes using machine learning algorithms. This project integrates Logistic Regression and SVM algorithms for predictive analysis. The frontend of the application is built with React and Material UI, providing a modern and intuitive user experience. The backend is developed using Flask, ensuring robust and scalable performance.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Admin Section](#admin-section)
7. [Dataset](#dataset)
8. [Machine Learning Models](#machine-learning-models)
9. [Examples](#examples)
10. [Contributing](#contributing)
11. [License](#license)
12. [Acknowledgements](#acknowledgements)

## Introduction

Diabetes is a chronic condition that affects millions of people worldwide. Early detection and management can significantly improve quality of life. This webapp aims to aid in the early detection of diabetes by leveraging machine learning algorithms to analyze health data and predict the likelihood of diabetes.

## Features

- **User Interface**: A user-friendly and responsive interface for predicting diabetes.
- **Admin Section**: An exclusive section for admins to upload datasets and retrain models.
- **Predictive Models**: Utilizes Logistic Regression and SVM algorithms for accurate predictions.
- **Dataset Handling**: Supports the Pima Indians Diabetes Dataset for training and testing.

## Tech Stack

- **Frontend**:
  - React
  - Material UI
- **Backend**:
  - Flask
- **Machine Learning**:
  - Scikit-learn
- **Dataset**:
  - Pima Indians Diabetes Dataset

## Installation

To get the project up and running on your local machine, follow these steps:

### Backend Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/bishal2459/clg-project..git
    cd clg-project
    ```

2. **Create a virtual environment**:
    ```bash
    python -m venv venv
    ```

3. **Activate the virtual environment**:
    - On Windows:
        ```bash
        venv\Scripts\activate
        ```
    - On macOS/Linux:
        ```bash
        source venv/bin/activate
        ```

4. **Install the dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

### Frontend Setup

1. **Navigate to the frontend directory**:
    ```bash
    cd frontend
    ```

2. **Install the dependencies**:
    ```bash
    npm install
    ```

## Usage

To run the application locally, follow these steps:

### Run the Backend

1. **Navigate to the project root directory**:
    ```bash
    cd ../
    ```

2. **Start the Flask server**:
    ```bash
    flask run
    ```

### Run the Frontend

1. **Navigate to the frontend directory**:
    ```bash
    cd frontend
    ```

2. **Start the React application**:
    ```bash
    npm start
    ```

### Access the Application

- Open your browser and navigate to `http://localhost:3000` to access the web application.
- To access the admin section, navigate to `http://localhost:3000/admin`.

## Admin Section

The admin section is an exclusive area of the webapp where authorized personnel can upload datasets to train the model. This section is accessible via the `/admin` URL. After the dataset is uploaded, the model is retrained to ensure accurate predictions.

### Admin Functions

- **Upload Dataset**: Upload the Pima Indians Diabetes Dataset to retrain the machine learning models.
- **Model Training**: Automatically retrain the models with the new dataset.

## Dataset

The Pima Indians Diabetes Dataset is used for training and testing the predictive models. This dataset includes several medical predictor variables and one target variable, Outcome.

- **Variables**:
  - Pregnancies
  - Glucose
  - Blood Pressure
  - Skin Thickness
  - Insulin
  - BMI
  - Diabetes Pedigree Function
  - Age
  - Outcome

## Machine Learning Models

The application leverages two machine learning algorithms:

- **Logistic Regression**: A statistical method for analyzing a dataset in which there are one or more independent variables that determine an outcome.
- **Support Vector Machine (SVM)**: A supervised learning model with associated learning algorithms that analyze data for classification and regression analysis.

## Examples

### Admin Section

1. **Upload the Pima Indians Diabetes Dataset**:
    - Navigate to the admin section via `http://localhost:3000/admin`.
    - Upload the dataset to train the model.

### User Prediction

1. **Enter Health Parameters**:
    - Enter the required health parameters (e.g., glucose level, blood pressure, etc.).
    - Click on the predict button to check if you have diabetes.

## Contributing

We welcome contributions from the community! If you have suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

### Steps to Contribute

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- **Dataset**: Pima Indians Diabetes Dataset
- **Frontend**: React, Material UI
- **Backend**: Flask
- **Machine Learning**: Scikit-learn

---

Feel free to reach out if you have any questions or need further assistance.
