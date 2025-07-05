import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTeam } from "../context/TeamContext";

const Navbar = () => {
  const { team, setTeam } = useTeam();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setTeam(null);
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          SPL Auction
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {team && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/bidding">
                    Bidding
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/my-team">
                    My Team
                  </Link>
                </li>
              </>
            )}
          </ul>

          {team && (
            <div className="d-flex align-items-center">
              <span className="text-white me-3">
                <strong>{team.name}</strong> (₹{team.budget})
              </span>
              <button
                className="btn btn-outline-light btn-sm"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
