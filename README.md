# Morse Converter

This is a small fullstack app that converts Morse Code to plain text.

## Running locally

    Note: You must have NodeJS and Python 3 installed in order to run this app.

The app is structured in a backend server written in Python using Flask and a web frontend written in Typescript with React.

### Running the backend

1. Go to the backend directory with ```cd backend```
2. (Optional) Create a Virtual Environment with ```python -m venv venv```
3. (Optional) Activate the Virtual Environment with ```venv\Scripts\activate``` on Windows or ```source venv/bin/activate``` on Linux
4. Install the dependencies with ```pip install -r requirements.txt```
5. Run the app on port 5000 with ```python app.py```

### Running the frontend

    The project was developed using yarn instead of npm, but using either of them should work fine.

1. Go to the backend directory with ```cd frontend```
2. (Optional) Install yarn with ```npm install -g yarn``` if you don't have it already
3. Install the dependencies with ```yarn``` or with ```npm install```
4. Run the app on port 3000 with ```yarn dev``` or ```npm run dev```

Once both apps are running you can see the website on http://localhost:3000