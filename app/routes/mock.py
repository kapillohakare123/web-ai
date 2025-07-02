from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def mock_prediction():
    return {"prediction": "mocked-value"}
