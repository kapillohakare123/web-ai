import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import Bidding from "./pages/Bidding";
import Login from "./pages/Login";
import MyTeam from "./pages/MyTeam";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/bidding"
            element={
              <Layout>
                <PrivateRoute>
                  <Bidding />
                </PrivateRoute>
              </Layout>
            }
          />
          <Route
            path="/my-team"
            element={
              <Layout>
                <PrivateRoute>
                  <MyTeam />
                </PrivateRoute>
              </Layout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
