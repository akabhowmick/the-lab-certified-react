import React, { useEffect, useRef } from "react";

const Navbar: React.FC = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const openMenuBtnRef = useRef<HTMLButtonElement>(null);
  const closeMenuBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleViewTransition = (updateDom: () => void) => {
      if (!(document).startViewTransition) updateDom();
      else (document).startViewTransition(() => updateDom());
    };

    const openMenu = () => {
      if (menuRef.current) menuRef.current.classList.add("open");
      if (closeMenuBtnRef.current) closeMenuBtnRef.current.focus();
      window.addEventListener("keyup", handleCloseWithESC);
    };

    const closeMenu = () => {
      if (menuRef.current) menuRef.current.classList.remove("open");
      if (openMenuBtnRef.current) openMenuBtnRef.current.focus();
      window.removeEventListener("keyup", handleCloseWithESC);
    };

    const handleCloseWithESC = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleViewTransition(closeMenu);
      }
    };

    if (openMenuBtnRef.current) {
      openMenuBtnRef.current.addEventListener("click", () => handleViewTransition(openMenu));
    }

    if (closeMenuBtnRef.current) {
      closeMenuBtnRef.current.addEventListener("click", () => handleViewTransition(closeMenu));
    }

    const navLinks = document.querySelectorAll(".NavLink");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => handleViewTransition(closeMenu));
    });

    return () => {
      if (openMenuBtnRef.current) {
        openMenuBtnRef.current.removeEventListener("click", () => handleViewTransition(openMenu));
      }

      if (closeMenuBtnRef.current) {
        closeMenuBtnRef.current.removeEventListener("click", () => handleViewTransition(closeMenu));
      }

      navLinks.forEach((link) => {
        link.removeEventListener("click", () => handleViewTransition(closeMenu));
      });
    };
  }, [openMenuBtnRef, closeMenuBtnRef]);

  return (
    <nav className="Navbar">
      <div className="container">
        <div className="Logo">The Lab Certified</div>
        <div id="menu" className="menu" ref={menuRef}>
          <header className="inline">
            <div className="Logo">vigor.</div>
            <button
              id="closeMenuBtn"
              title="Close Menu"
              aria-label="Close Menu"
              className="NavButton"
              ref={closeMenuBtnRef}
            >
              <i className="ri-close-line"></i>
            </button>
          </header>
          <a href="#home" className="NavLink">
            Home
          </a>
          <a href="#schedules" className="NavLink">
            Schedules
          </a>
          <a href="#plans" className="NavLink">
            Plans
          </a>
          <a href="#about" className="NavLink">
            About
          </a>
        </div>
        <button
          id="openMenuBtn"
          title="Open Menu"
          aria-label="Open Menu"
          className="NavButton"
          ref={openMenuBtnRef}
        >
          <i className="ri-menu-line"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
