import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavUnlisted } from "./NavbarStyles";

const links = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
  { name: "Events", path: "/programs" },
  { name: "Programs", path: "/programs" },
  { name: "Profile", path: "/profile" },
  { name: "Services", path: "/services" },
  { name: "Testimonials", path: "/testimonials" },
];

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const linksWithNavLink = links.map((link, index) => (
    <NavLink
      onClick={() => setShowNavbar(false)}
      key={index}
      to={link.path}
      className={({ isActive, isPending, isTransitioning }) =>
        [
          isPending ? "pending" : "",
          isActive ? "active" : "",
          isTransitioning ? "transitioning" : "",
        ].join(" ")
      }
    >
      <li>{link.name}</li>
    </NavLink>
  ));

  return (
    <div className="root-layout">
      <header className="nav-bar">
        <nav>
          <NavUnlisted
            aria-label="Larger viewport navigation menu with links"
            className="main-navbar-ul"
          >
            <div className="menu-icon" onClick={handleShowNavbar}>
              View Our Pages <MenuIcon />
            </div>
            {showNavbar && (
              <div className="nav-elements">
                <ul>{linksWithNavLink}</ul>
              </div>
            )}

            <NavLink
              onClick={() => setShowNavbar(false)}
              to="/"
              id="logo-with-title"
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? "pending" : "",
                  isActive ? "active" : "",
                  isTransitioning ? "transitioning" : "",
                ].join(" ")
              }
            >
              <img className="navbar-logo" src={logo} alt="tkd-main-logo" />
              <h2>The Lab Certified</h2>
            </NavLink>
          </NavUnlisted>
        </nav>
      </header>
      <main className="py-16">
        <Outlet />
      </main>
    </div>
  );
};
