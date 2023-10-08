import React, { useState, useEffect } from "react";

const Navbar = ({
  toggleMenu,
  menuVisible,
  filter,
  setFilter,
  toggleSidebar,
}) => {
  // State to track whether the screen width is less than or equal to 768px
  const [isMobile, setIsMobile] = useState(false);

  // Function to check if the screen width is less than or equal to 768px
  const checkScreenWidth = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    // Add an event listener to check the screen width on window resize
    window.addEventListener("resize", checkScreenWidth);

    // Initial check when the component mounts
    checkScreenWidth();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  return (
    <div className="navbar">
      {/* Left section of the navbar */}
      <div className="nav-left">Countries</div>
      {/* Conditional rendering for filter links or hamburger menu */}
      {isMobile ? (
        // Hamburger menu for mobile view
        <button
          className={`menu-button ${menuVisible ? "visible" : ""}`}
          onClick={() => {
            toggleMenu();
            toggleSidebar();
          }}
        >
          {/* Three lines representing the hamburger icon */}
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </button>
      ) : (
        // Filter links for larger screens
        <div className={`filter-links ${menuVisible ? "visible" : ""}`}>
          {/* Filter links */}
          <span
            onClick={() => setFilter("all")}
            className={filter === "all" ? "active bold-text" : ""}
          >
            All
          </span>
          <span
            onClick={() => setFilter("Asia")}
            className={filter === "Asia" ? "active bold-text" : ""}
          >
            Asia
          </span>
          <span
            onClick={() => setFilter("Europe")}
            className={filter === "Europe" ? "active bold-text" : ""}
          >
            Europe
          </span>
        </div>
      )}
    </div>
  );
};

export default Navbar;
