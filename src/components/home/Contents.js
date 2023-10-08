import React from "react";

const Contents = ({ filteredCountries }) => {
  return (
    <div className="centered-container">
      <div className="column">
        {/* Map and render the first half of filtered countries */}
        {filteredCountries
          .slice(0, Math.ceil(filteredCountries.length / 2))
          .map((country) => (
            <div key={country.name} className="country">
              <div className="flag">
                <img src={country.flagUrl} alt={`${country.name} Flag`} />
              </div>
              <div className="info">
                <h2>{country.name}</h2>
                <p>{country.region}</p>
              </div>
            </div>
          ))}
      </div>
      <div className="column">
        {/* Map and render the second half of filtered countries */}
        {filteredCountries
          .slice(Math.ceil(filteredCountries.length / 2))
          .map((country) => (
            <div key={country.name} className="country">
              <div className="flag">
                <img src={country.flagUrl} alt={`${country.name} Flag`} />
              </div>
              <div className="info">
                <h2>{country.name}</h2>
                <p>{country.region}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Contents;
