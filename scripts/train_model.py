from sklearn.linear_model import LogisticRegression
from sklearn.datasets import load_iris
import joblib

iris = load_iris()
X, y = iris.data[:, :2], iris.target
model = LogisticRegression().fit(X, y)

joblib.dump(model, "ml/model.pkl")
