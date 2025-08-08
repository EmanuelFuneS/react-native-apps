import { useEffect, useState } from "react";
import { weatherApi } from "../services/weatherApi";

interface UseWeatherByCity {
  city: string;
  state?: string;
  country?: string;
}

function useWeatherByCity({ city, country, state }: UseWeatherByCity) {
  const [cityWeather, setCityWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!cityWeather) {
      return;
    }

    const fetchWeather = async () => {
      try {
        let q = city;

        if (country && state) {
          q += `,${state},${country}`;
        } else if (country) {
          q += `,${country}`;
        }
        const response = await weatherApi.getCurrentWeatherByCity(q);
        setCityWeather(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city, state, country]);

  return {
    cityWeather,
    loading,
    error,
  };
}

export default useWeatherByCity;
