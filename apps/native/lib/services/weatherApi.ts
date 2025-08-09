import axios from "axios";
import { GeoLocation, WeatherResponse } from "../types";

const API_KEY = process.env.EXPO_PUBLIC_OPEN_WEATHER_API_KEY;
const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;
const BASE_GEO_URL = process.env.EXPO_PUBLIC_BASE_GEO_URL;

interface WeatherApi {
  getCurrentWeather: (
    q?: string,
    lat?: string,
    lon?: string
  ) => Promise<WeatherResponse>;
  getCityByGeoLocation: (
    latitude: string,
    longitude: string
  ) => Promise<GeoLocation>;
  getForecastFiveDaysThreeHours: (q: string) => Promise<any>;
  getBySearchLocation: (q: string) => Promise<any>;
}

export const weatherApi = {
  getCurrentWeather: async (q, lat, lon) => {
    try {
      // Fetch data with name location
      if (
        (q === undefined || q === "") &&
        (lat === undefined || lat === "" || lon === undefined || lon === "")
      ) {
        return new Error(
          "Either location name (q) or both coordinates (lat and lon) are required"
        );
      }
      const response = await axios.get(`${BASE_URL}/weather`, {
        params: {
          appid: API_KEY,
          q: q || "",
          lat: lat || "",
          lon: lon || "",
          units: "metric",
          lang: "es",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error int fetch data with location name", error);
      return new Error("Failed to fetch current weather data");
    }
  },
  getCityByGeoLocation: async (latitude, longitude) => {
    try {
      // Fetch data with latitude and longitude
      if (latitude === undefined || longitude === undefined)
        return new Error("latitude and longitude are required");
      const response = await axios.get(`${BASE_GEO_URL}/reverse`, {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          appid: API_KEY,
          lat: latitude,
          lon: longitude,
          limit: 1,
        },
      });

      console.log("Service:", response);
      return response.data;
    } catch (error) {
      console.error("Error fetching location by latitude and longitude", error);
      return new Error("Failed to fetch location by latitude and longitude");
    }
  },

  getForecastFiveDaysThreeHours: async (q) => {
    try {
      // Fetch data with name location for forecast
      if (q === undefined || q === "")
        return new Error("location name are required");
      const response = await axios.get(`${BASE_URL}/forecast`, {
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

  getBySearchLocation: async (q) => {
    try {
      //fetch data with search location
      // This endpoint is used to search for locations by name
      if (q === undefined || q === "")
        return new Error("location name are required");
      const response = await axios.get(`${BASE_URL}/direct`, {
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
