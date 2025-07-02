# 🧠 Web AI Platform

## 🌟 Overview

A modular Python project that combines:

- ✅ Web APIs using **FastAPI**
- 🤖 Machine Learning integration with **scikit-learn**
- 🔧 Future-ready **automation tools**
- 📊 Notebook-based data exploration
- 📦 Clean architecture, ready for scaling or deployment

---

## 🚀 Getting Started

### ✅ Step 1: Setup Environment

```bash
git clone https://github.com/your-username/web_ai_platform.git  # Replace with your repository URL
cd web_ai_platform
python3 -m venv venv
source venv/bin/activate  # On Windows, use 'venv\Scripts\activate' instead of 'source venv/bin/activate'
pip install -r requirements.txt
```

### ✅ Step 2: Train the ML Model

```bash
python scripts/train_model.py
```

This generates the file `ml/model.pkl` (relative to the project root), which is used by the `/predict` API route.

### ✅ Step 3: Run FastAPI Server

```bash
uvicorn app.main:app --reload
```

Visit: [http://localhost:8000](http://localhost:8000)

---

## 🌐 API Endpoints

- **`/`** → Home route  
   Displays a welcome message or basic project information.

- **`/mock/`** → Mocked Prediction  
   Returns a mocked prediction response for testing purposes.

- **`/predict?x=5&y=2`** → Real Model Prediction  
   Accepts query parameters (`x` and `y`) and returns a prediction based on the trained ML model.

---

### 🧪 API Examples

#### Mock Endpoint

**GET** `/mock/`  
**Response:**

```json
{ "prediction": "mocked-value" }
```

#### Real Prediction

**GET** `/predict/?x=4.5&y=2.3`

```json
Response: { "prediction": 1 }
```

### ⚙️ Automation Setup

Future automation tasks can go in the automation/ folder:

- scheduler.py – for cron-based or scheduled tasks
- emailer.py – script to send emails (e.g., notifications)

🧠 Notebooks

Use notebooks/eda.ipynb to perform exploratory data analysis.

Launch using:

```bash
jupyter notebook
```

🖥️ Editor Setup (VS Code)
Included `.vscode/settings.json` example:

📦 Dependencies

From requirements.txt:

- fastapi
- uvicorn
- scikit-learn
- joblib

Add more as needed (e.g., pandas, numpy, etc.)

✅ To Do (Future Enhancements)

- Add Streamlit or Gradio UI
- Add authentication layer (e.g., OAuth2/JWT)
- Dockerize app
- Add unit tests with pytest  
  [Learn more about pytest](https://docs.pytest.org/en/stable/).  
  Example: Create a `tests/` folder and run tests using `pytest tests/`.

### 🔥 High Priority

- Add authentication layer (e.g., OAuth2/JWT)
- Dockerize app
- Add unit tests with pytest

```
- Use SQLAlchemy or a DB to store predictions
- Add Streamlit or Gradio UI
- Use SQLAlchemy or a DB to store predictions
- Integrate MLflow or Weights & Biases for tracking
- You want to start with a mock API, then wire in real ML
- You’ll expand to automation or dashboards
- You value clean, modular structure
```
