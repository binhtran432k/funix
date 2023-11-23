import navbar from "./navBar.json";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const actions = [
  {
    name: "Register",
    href: "#",
  },
  {
    name: "Login",
    href: "#",
  },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__main">
          <h2>
            <a href="/" className="navbar__host">
              Booking Website
            </a>
          </h2>
          <div className="navbar__action-list">
            {actions.map((x) => (
              <a href={x.href} className="navbar__action" key={x.name}>
                {x.name}
              </a>
            ))}
          </div>
        </div>
        <ul className="navbar__nav">
          {navbar.map((x) => (
            <li key={x.type}>
              <a
                href="/"
                className={["navbar__nav-item", x.active && "active"]
                  .filter(Boolean)
                  .join(" ")}
              >
                <FontAwesomeIcon icon={["fa-solid", x.icon].join(" ")} />
                {x.type}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
