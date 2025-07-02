import joblib
import os

model_path = os.path.join(os.path.dirname(__file__), "model.pkl")
try:
    model = joblib.load(model_path)
except:
    model = None  # Placeholder model

def predict_from_input(x, y):
    if model:
        return int(model.predict([[x, y]])[0])
    return "model not available"
