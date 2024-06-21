import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/logo.png";

import "./Navbar.css";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavUnlisted } from "./NavbarStyles";

const links = [
  { name: "Events", path: "/events" },
  { name: "Free Session", path: "/free-session" },
  { name: "In-Person Training", path: "/in-person-training" },
  { name: "Testimonials", path: "/testimonials" },
];

// const dropDownMenuLink = [
//   { name: "E-Waiver", path: "/events" },
//   { name: "Free Session", path: "/free-session" },
//   { name: "In-Person Training", path: "/in-person-training" },
//   { name: "More", path: "/" },
// ];

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
            <ul className="main-regular-links">{linksWithNavLink}</ul>
            <div className="menu-icon" onClick={handleShowNavbar}>
              <MenuIcon />
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
      <main>
        <Outlet />
      </main>
    </div>
  );
};
