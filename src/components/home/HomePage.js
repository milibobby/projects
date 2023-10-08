import React, { useState, useEffect } from "react";
import { fetchCountriesData } from "../apiServices/CountriesApi";
import "../styles/home.css";
import Navbar from "./Navbar";
import Contents from "./Contents";
import Footer from "./Footer";

const HomePage = () => {
  // State variables for countries data, filtered countries, error, filter, menu visibility, and sidebar visibility
  const [countriesData, setCountriesData] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");
  const [menuVisible, setMenuVisible] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  // Function to toggle the sidebar visibility
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  // Fetch countries data from an API on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCountriesData();
        setCountriesData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  // Filter countries based on the selected region and scroll to the top
  useEffect(() => {
    if (filter === "all") {
      setFilteredCountries(countriesData);
    } else {
      const filtered = countriesData.filter(
        (country) => country.region === filter
      );
      setFilteredCountries(filtered);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [filter, countriesData]);

  return (
    <div className="home-page">
      {/* Navbar component */}
      <Navbar
        toggleMenu={toggleMenu}
        menuVisible={menuVisible}
        filter={filter}
        setFilter={setFilter}
        toggleSidebar={toggleSidebar} // Pass toggleSidebar function to Navbar
      />
      {/* Sidebar */}
      {sidebarVisible && (
        <div className="sidebar">
          {/* Filter links */}
          <p onClick={() => setFilter("all")}>All</p>
          <p onClick={() => setFilter("Asia")}>Asia</p>
          <p onClick={() => setFilter("Europe")}>Europe</p>
        </div>
      )}
      {/* Contents component with filtered countries */}
      <Contents filteredCountries={filteredCountries} />
      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default HomePage;
