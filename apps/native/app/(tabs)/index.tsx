import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import WeatherTodayCard from "../../components/weatherTodayCard";
import useLocation from "../../hooks/useLocation";

const dummyWeatherData = {
  coord: { lon: -64.18, lat: -31.42 },
  weather: [
    {
      id: 803,
      main: "Clouds",
      description: "algo de nubes",
      icon: "04d",
    },
  ],
  base: "stations",
  main: {
    temp: 29.15, // Kelvin, equivalente a 22°C
    feels_like: 294.85,
    temp_min: 293.71,
    temp_max: 296.22,
    pressure: 1012,
    humidity: 75,
  },
  visibility: 10000,
  wind: {
    speed: 3.6,
    deg: 240, // 240 grados, dirección suroeste
  },
  clouds: {
    all: 75,
  },
  dt: 1678886400, // Unix timestamp
  sys: {
    type: 1,
    id: 8092,
    country: "AR",
    sunrise: 1678864000,
    sunset: 1678906000,
  },
  timezone: -10800, // UTC -3 (Argentina)
  id: 3860259,
  name: "Córdoba",
  cod: 200,
};

export default function index() {
  const { location, error, isLoading } = useLocation();

  console.log("Current Location:", location);
  console.log("Error:", error);
  console.log("Is Loading:", isLoading);
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <LinearGradient colors={["#5bc7eb", "#175b80"]} style={styles.gradient}>
        <View>
          <Text>Current Location {JSON.stringify(location)}</Text>
          <WeatherTodayCard city={"Cordoba"} weatherData={dummyWeatherData} />
        </View>
      </LinearGradient>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  searchBar: {
    width: "90%",
    marginBottom: 20,
  },
  cityMapView: {
    width: "90%",
  },
  gradient: {
    height: "100%",
  },
});
