import { useEffect, useState } from "react";
import { useTeam } from "../context/TeamContext";
import { getPlayers, postBid } from "../services/api";

function Bidding() {
  const [players, setPlayers] = useState([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [bidAmount, setBidAmount] = useState("");
  const [bidding, setBidding] = useState(false);
  const [message, setMessage] = useState("");
  const { team } = useTeam();

  const currentPlayer = players[currentPlayerIndex];

  useEffect(() => {
    getPlayers().then((res) => setPlayers(res.data));
  }, []);

  const handleSubmitBid = async () => {
    if (!bidAmount || isNaN(bidAmount)) {
      return setMessage("Enter a valid bid amount.");
    }

    if (bidAmount > team?.budget) {
      return setMessage("Insufficient budget.");
    }

    const data = {
      team: team?.id,
      player: currentPlayer.id,
      amount: bidAmount,
    };

    try {
      setBidding(true);
      await postBid(data);
      setMessage(`Bid of ₹${bidAmount} submitted for ${currentPlayer.name}.`);
      setBidAmount("");
    } catch (err) {
      setMessage("Failed to place bid.");
    } finally {
      setBidding(false);
    }
  };

  const handleNextPlayer = () => {
    if (currentPlayerIndex < players.length - 1) {
      setCurrentPlayerIndex((prev) => prev + 1);
      setBidAmount("");
      setMessage("");
    }
  };

  if (!currentPlayer) return <p className="p-4">Loading players...</p>;

  return (
    <div className="container mt-4" style={{ maxWidth: "600px" }}>
      <h2 className="h5 text-center mb-4">Welcome, {team?.name}</h2>
      <h2 className="h4 text-center fw-bold mb-4">Live Bidding</h2>

      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{currentPlayer.name}</h5>
          <p className="card-text">Role: {currentPlayer.role}</p>
          <p className="card-text">Base Price: ₹{currentPlayer.base_price}</p>
          {currentPlayer.image && (
            <img
              src={currentPlayer.image}
              alt={currentPlayer.name}
              className="img-thumbnail mt-2"
              style={{ maxWidth: "100px" }}
            />
          )}
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Your Bid (₹)</label>
        <input
          type="number"
          value={bidAmount}
          onChange={(e) => setBidAmount(e.target.value)}
          className="form-control"
          disabled={bidding}
        />
      </div>

      <div className="d-grid">
        <button
          onClick={handleSubmitBid}
          className="btn btn-primary"
          disabled={bidding}
        >
          {bidding ? "Placing Bid..." : "Place Bid"}
        </button>
      </div>

      {message && (
        <div className="alert alert-info mt-3 text-center py-2">{message}</div>
      )}

      <div className="bg-light rounded p-3 mt-4">
        <h6 className="mb-1">Team: {team?.name}</h6>
        <p className="mb-0">Remaining Budget: ₹{team?.budget}</p>
      </div>

      <div className="text-center mt-4">
        <button
          onClick={handleNextPlayer}
          className="btn btn-secondary"
          disabled={currentPlayerIndex >= players.length - 1}
        >
          Next Player
        </button>
      </div>
    </div>
  );
}

export default Bidding;
