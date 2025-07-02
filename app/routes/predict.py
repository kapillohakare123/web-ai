from fastapi import APIRouter
from ml.predict import predict_from_input

router = APIRouter()

@router.get("/")
def get_prediction(x: float, y: float):
    result = predict_from_input(x, y)
    return {"prediction": result}
