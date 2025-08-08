import { useEffect, useState } from "react";
import { weatherApi } from "../services/weatherApi";
import { ApiResponse } from "../types";
import { WeatherResponse } from "../types/weather";
interface UseWeatherByLocation {
  latitude: string;
  longitude: string;
}

const useWeatherByLocation = ({
  latitude,
  longitude,
}: UseWeatherByLocation) => {
  const [weatherLocation, setWeatherLocation] =
    useState<WeatherResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  console.log(latitude, longitude);
  useEffect(() => {
    if (!latitude || !longitude) {
      setIsLoading(false);
      return;
    }
    const fetchData = async () => {
      try {
        const response: ApiResponse<WeatherResponse> =
          await weatherApi.getCityByGeoLocation(latitude, longitude);

        setWeatherLocation(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [latitude, longitude]);

  return {
    weatherLocation,
    isLoading,
    error,
  };
};

export default useWeatherByLocation;
