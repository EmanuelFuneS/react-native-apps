// hooks/useWeatherData.js
import { useMemo } from "react";
import { Q } from "../types";
import useCityByLocation from "./useCityByLocation";
import useLocation from "./useLocation";
import useWeatherByCity from "./useWeatherByCity";

export const useWeatherDefault = () => {
  const {
    location,
    error: errorLocation,
    isLoading: locationLoading,
  } = useLocation();
  const {
    cityLocation,
    error: cityError,
    isLoading: cityLoading,
  } = useCityByLocation(location);
  const {
    cityWeather,
    error: weatherError,
    isLoading: weatherLoading,
  } = useWeatherByCity(cityLocation as Q);

  const state = useMemo(() => {
    const isLoading =
      locationLoading ||
      (!location && !errorLocation) ||
      (location && cityLoading) ||
      (cityLocation && weatherLoading);

    const error = errorLocation || cityError || weatherError;

    const hasCompleteData = location && cityLocation && cityWeather;

    return {
      data: hasCompleteData ? { location, cityLocation, cityWeather } : null,
      isLoading,
      error,
      progress: {
        location: !!location,
        city: !!cityLocation,
        weather: !!cityWeather,
      },
    };
  }, [
    location,
    cityLocation,
    cityWeather,
    locationLoading,
    cityLoading,
    weatherLoading,
    errorLocation,
    cityError,
    weatherError,
  ]);

  return state;
};
