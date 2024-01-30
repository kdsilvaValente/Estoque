import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";

function Routepath() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/Pagina-inicial">DashBoard</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/Pagina-inicial" Component={Dashboard} />
      </Routes>
    </Router>
  );
}

export default Routepath;
