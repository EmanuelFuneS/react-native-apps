import * as GeoLocation from "expo-location";
import { useEffect, useState } from "react";
import { weatherApi } from "../services/weatherApi";
import { WeatherResponse } from "../types";

const useCurrentWeather = () => {
  const [currentWeather, setCurrentWeather] = useState<
    WeatherResponse | undefined
  >(undefined);
  const [currentWeatherError, setCurrentWeatherError] = useState();
  const [isLoadingCurrentWeather, setIsLoadingCurrentWeather] =
    useState<boolean>(true);

  useEffect(() => {
    const getCurrentWeather = async () => {
      try {
        const { status } =
          await GeoLocation.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          console.error("Error in GeoLocation");
          return;
        }

        const location = await GeoLocation.getCurrentPositionAsync({
          accuracy: GeoLocation.Accuracy.High,
          timeInterval: 10000,
          distanceInterval: 10,
        });

        const response = await weatherApi.getCurrentWeather(
          "",
          location.coords.latitude.toString(),
          location.coords.longitude.toString()
        );

        setCurrentWeather(response);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setCurrentWeatherError(error);
      } finally {
        setIsLoadingCurrentWeather(false);
      }
    };

    getCurrentWeather();
  }, []);

  return {
    currentWeather,
    currentWeatherError,
    isLoadingCurrentWeather,
  };
};

export default useCurrentWeather;
