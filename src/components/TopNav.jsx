import { Link } from "react-router-dom";

const TopNav = () => (
  <div className="nav bg-light d-flex justify-content-between">
    <Link className="nav-link" to="/">
      Home
    </Link>
    <Link className="nav-link" to="/login">
      Ingreso
    </Link>
    <Link className="nav-link" to="/register">
      Registro
    </Link>
  </div>
);

export default TopNav;
