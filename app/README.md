# 🧠 Web AI Platform

## 🌟 Overview

Welcome to the **Web AI Platform**, a modular Python-based solution designed to seamlessly integrate:

- 🚀 **Web APIs** powered by **FastAPI** or **Django**
- 🤖 **Machine Learning** workflows using **scikit-learn**
- 📈 **Exploratory Data Analysis** with Jupyter notebooks
- 🧱 **Scalable Architecture** for clean and maintainable code
- 🔧 **Extensibility** for automation, databases, and user interfaces

---

## 📂 Project Structure

The project is organized as follows:

```
web_ai_platform/
├── config/         # Django settings and configurations
├── myapp/          # Main Django application
├── ml/             # Machine Learning models and utilities
├── notebooks/      # Jupyter notebooks for EDA
├── automation/     # Scripts for future automation tasks
├── scripts/        # Training and utility scripts
├── tests/          # Unit tests for the project
├── manage.py       # Django entry point
├── requirements.txt # Project dependencies
└── README.md       # Project documentation
```

---

## 🚀 Getting Started

### ✅ Step 1: Set Up the Environment

Create and activate a virtual environment:

```bash
python3 -m venv venv
source venv/bin/activate  # For Windows: venv\Scripts\activate

pip install -r requirements.txt
```

### ✅ Step 2: Run the Django Project

Start the development server:

```bash
python manage.py runserver
```

Access the application at: [http://localhost:8000](http://localhost:8000)

### 🌐 API Endpoints

Explore the available API routes:

- `/` → Home route (Django or FastAPI-based)
- `/mock/` → Mocked prediction response
- `/predict?x=5&y=2` → Real-time ML prediction

---

### Migrations

```bash
python3 manage.py makemigrations
```

If any migrations are available, run below:

```bash
python3 manage.py migrate
```

Enjoy building with the Web AI Platform! 🚀

### Load the Data

```bash
python manage.py loaddata products
```
