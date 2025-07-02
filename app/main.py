from fastapi import FastAPI
from app.routes import predict, mock

app = FastAPI(title="AI Web Platform")

app.include_router(predict.router, prefix="/predict")
app.include_router(mock.router, prefix="/mock")

@app.get("/")
def read_root():
    return {"message": "Welcome to the AI Web Platform"}
