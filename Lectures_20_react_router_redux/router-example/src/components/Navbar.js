import { Link } from "react-router-dom";
/**
 * Step 1: Import Link from react router dom
 * Step 2: Specify the address for a page in `to` attribute within link tag
 */
export function Navbar() {
  return (
    <div className="navbar-container">
      <Link to="/">
        <div className="title">Character Site</div>
      </Link>

      <ul className="navbar-menu">
        <Link to="/character">
          <li>Character</li>
        </Link>
        <Link to="/aboutus">
          <li>About Us</li>
        </Link>
      </ul>
    </div>
  );
}
