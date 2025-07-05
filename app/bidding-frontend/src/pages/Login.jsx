import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTeam } from "../context/TeamContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setTeam } = useTeam();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:8000/api/auction/token/", {
        username,
        password,
      });

      const { access } = res.data;
      localStorage.setItem("token", access);
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);

      const teamRes = await axios.get(
        "http://localhost:8000/api/auction/my-team/",
        {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        }
      );

      setTeam(teamRes.data);
      navigate("/bidding");
    } catch (err) {
      setError("Login failed. Check username or password.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="card shadow p-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center mb-4">Team Login</h2>

        <div className="mb-3">
          <input
            type="text"
            placeholder="Username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleLogin} className="btn btn-primary w-100">
          Login
        </button>

        <div className="text-muted mt-3 text-center">
          <small>
            Try: <strong>teamalpha</strong> / <strong>password123</strong>
          </small>
        </div>

        {error && (
          <div className="alert alert-danger mt-3 text-center py-2">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
