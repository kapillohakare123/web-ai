import { Navigate } from "react-router-dom";
import { useTeam } from "../context/TeamContext";

function PrivateRoute({ children }) {
  const { team } = useTeam();

  if (!team) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default PrivateRoute;
