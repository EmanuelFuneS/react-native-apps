import * as GeoLocation from "expo-location";
import { ErrorLocation, Location } from "lib/types";
import { useEffect, useState } from "react";

const useLocation = () => {
  const [location, setLocation] = useState<Location>({
    lat: "0",
    lon: "0",
  });
  const [error, setError] = useState<ErrorLocation>({ code: 0, message: "" });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const { status } =
          await GeoLocation.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setError({
            code: 1,
            message: "Permission to access location was denied",
          });
          setIsLoading(false);
          return;
        }

        const location = await GeoLocation.getCurrentPositionAsync({
          accuracy: GeoLocation.Accuracy.High,
          timeInterval: 10000,
          distanceInterval: 10,
        });

        setLocation({
          lat: location.coords.latitude.toString(),
          lon: location.coords.longitude.toString(),
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
