import axios from "axios";
import React, { useEffect, useState } from "react";

const MyTeam = () => {
  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const token = localStorage.getItem("access");
        const res = await axios.get(
          "http://localhost:8000/api/auction/my-team/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTeam(res.data);
      } catch (err) {
        console.error("Failed to load team:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (!team) return <div className="text-center mt-5">No team found</div>;

  return (
    <div className="container mt-5">
      <h2 className="text-primary">
        {team.name} <small className="text-muted">({team.owner_name})</small>
      </h2>
      <p className="lead">Remaining Budget: ₹{team.budget}</p>

      <div className="row">
        {team.players.map((player, idx) => (
          <div key={idx} className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img
                src={player.image}
                className="card-img-top"
                alt={player.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{player.name}</h5>
                <p className="card-text">
                  Role: {player.role}
                  <br />
                  Price: ₹{player.sold_price}
                  <br />
                  Matches: {player.matches}
                  <br />
                  Bat Avg: {player.batting_avg}
                  <br />
                  Strike Rate: {player.strike_rate}
                  <br />
                  {player.role !== "Batsman" && <>Economy: {player.economy}</>}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTeam;
