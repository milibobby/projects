import axios from "axios";

const baseURL = "https://restcountries.com/v2/all?fields=name,region,flags";

// Custom error class for API-related errors
class APIClientError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "APIClientError";
    this.statusCode = statusCode;
  }
}

async function fetchCountriesData() {
  try {
    const response = await axios.get(baseURL);

    if (response.status === 200) {
      const countriesData = response.data.map((country) => ({
        name: country.name,
        region: country.region,
        flagUrl: country.flags.png,
      }));

      return countriesData;
    } else {
      throw new APIClientError(
        "Failed to fetch data from the API",
        response.status
      );
    }
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      throw new APIClientError(
        `API request failed with status: ${error.response.status}`,
        error.response.status
      );
    } else if (error.request) {
      // The request was made but no response was received
      throw new APIClientError("No response received from the API", -1);
    } else {
      // Something else went wrong
      throw new APIClientError(`An error occurred: ${error.message}`, -1);
    }
  }
}

export { fetchCountriesData, APIClientError };
