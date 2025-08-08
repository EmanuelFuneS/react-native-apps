import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const STORAGE_KEY = "saved-cities";

interface City {
  latitude: string;
  longitude: string;
}

export const useStorage = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);

  const loadCities = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      if (jsonValue != null) {
        setCities(JSON.parse(jsonValue));
      }
    } catch (error) {
      console.error("Error to load city", error);
    }
  };

  const saveCity = async (city: City) => {
    try {
      const jsonValue = JSON.stringify([...cities, city]);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
      setCities([...cities, city]);
    } catch (error) {
      console.error("Error to save City: ", error);
    }
  };

  useEffect(() => {
    loadCities();
  }, []);

  return {
    cities,
    loading,
    saveCity,
  };
};
