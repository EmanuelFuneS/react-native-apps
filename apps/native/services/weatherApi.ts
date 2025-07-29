import axios from "axios";

const API_KEY = process.env.OPEN_WEATHER_API_KEY;
const BASE_URL = process.env.BASE_URL;

export const weatherApi = {
  getCurrentWeather: async (lat, lon, part) => {
    try {
      const response = await axios.get(`${BASE_URL}`, {
        params: {
          appid: API_KEY,
          lat: lat,
          lon: lon,
          exclude: part,
          units: "metric",
          lang: "es",
        },
      });
      return response;
    } catch (error) {
      console.error("Error int fetch data", error);
    }
  },
  getCurrentLocationByLatitudeLongitude: (lat, lon) => {},

  getForecastFiveDaysThreeHours: (q) => {},

  getBySearchLocation: (q) => {},
};
