import * as Location from "expo-location";
import { useEffect, useState } from "react";

interface Location {
  latitude: number;
  longitude: number;
}

interface ErrorLocation {
  code: number;
  message: string;
}

const useLocation = () => {
  const [location, setLocation] = useState<Location>({
    latitude: 0,
    longitude: 0,
  });
  const [error, setError] = useState<ErrorLocation>({ code: 0, message: "" });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setError({
            code: 1,
            message: "Permission to access location was denied",
          });
          setIsLoading(false);
          return;
        }

        const location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
          timeInterval: 10000,
          distanceInterval: 10,
        });

        setLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      } catch (error) {
        setError({ code: 2, message: "Failed to fetch location" });
        console.error("Error fetching location:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getLocation();
  }, []);

  return { location, error, isLoading };
};

export default useLocation;
