import axios from "axios";

const API_KEY = process.env.OPEN_WEATHER_API_KEY;
const BASE_URL = process.env.BASE_URL;
const BASE_GEO_URL = process.env.BASE_GEO_URL;

interface WeatherApi {
  getCurrentWeather: (q: string) => Promise<any>;
  getCurrentLocationByLatitudeLongitude: (
    latitude: number,
    longitude: number
  ) => void;
  getForecastFiveDaysThreeHours: (q: string) => void;
  getBySearchLocation: (q: string) => void;
}

export const weatherApi = {
  getCurrentWeather: async (q) => {
    try {
      // Fetch data with name location
      if (q === undefined || q === "")
        return new Error("location name are required");
      const response = await axios.get(`${BASE_URL}/weather`, {
        params: {
          appid: API_KEY,
          q: q,
          units: "metric",
          lang: "es",
        },
      });
      return response;
    } catch (error) {
      console.error("Error int fetch data with location name", error);
      return new Error("Failed to fetch current weather data");
    }
  },
  getCurrentLocationByLatitudeLongitude: (latitude, longitude) => {
    try {
      // Fetch data with latitude and longitude
      if (latitude === undefined || longitude === undefined)
        return new Error("latitude and longitude are required");
      const response = axios.get(`${BASE_GEO_URL}/reverse`, {
        params: {
          appid: API_KEY,
          lat: latitude,
          lon: longitude,
          limit: 1,
          lang: "es",
        },
      });
      return response;
    } catch (error) {
      console.error("Error fetching location by latitude and longitude", error);
      return new Error("Failed to fetch location by latitude and longitude");
    }
  },

  getForecastFiveDaysThreeHours: (q) => {
    try {
      // Fetch data with name location for forecast
      if (q === undefined || q === "")
        return new Error("location name are required");
      const response = axios.get(`${BASE_URL}/forecast`, {
        params: {
          q: q,
          appid: API_KEY,
          units: "metric",
          lang: "es",
        },
      });
      return response;
    } catch (error) {
      console.error("Error fetching forecast data", error);
      return new Error("Failed to fetch forecast data");
    }
  },

  getBySearchLocation: (q) => {
    try {
      //fetch data with search location
      // This endpoint is used to search for locations by name
      if (q === undefined || q === "")
        return new Error("location name are required");
      const response = axios.get(`${BASE_URL}/direct`, {
        params: {
          appid: API_KEY,
          q: q,
          limit: 5,
        },
      });
      return response;
    } catch (error) {
      console.error("Error fetching location by search", error);
      return new Error("Failed to fetch location by search");
    }
  },
} as WeatherApi;
