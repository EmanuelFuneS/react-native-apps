import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import { useEffect } from "react";
import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import WeatherForecastCard from "../../components/WeatherForecastCard";
import WeatherTodayCard from "../../components/weatherTodayCard";
import useLocation from "../../lib/hooks/useLocation";
import useWeatherByLocation from "../../lib/hooks/useWeatherByLocation";

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
  const { location, error: errorLocation, isLoading } = useLocation();
  const { weatherLocation, error } = useWeatherByLocation(location);

  console.log("City By GeoLocation", weatherLocation);

  useEffect(() => {}, [location]);

  const forecastData = [
    { id: 1, date: "Mon", tem: "29°C" },
    { id: 2, date: "Wed", tem: "29°C" },
    { id: 3, date: "Fri", tem: "29°C" },
    { id: 4, date: "Sun", tem: "29°C" },
    { id: 5, date: "Sat", tem: "29°C" },
  ];

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View>
        <ScrollView style={styles.forecastMapView}>
          <LinearGradient
            colors={["#5bc7eb", "#175b80"]}
            style={styles.gradient}
          >
            <Text>Current Location {JSON.stringify(location)}</Text>
            <WeatherTodayCard city={"Cordoba"} weatherData={dummyWeatherData} />
            <FlatList
              data={forecastData}
              numColumns={1}
              renderItem={({ item }) => (
                <WeatherForecastCard
                  key={item.id}
                  date={item.date}
                  temp={item.tem}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </LinearGradient>
        </ScrollView>
        <StatusBar />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  searchBar: {
    width: "90%",
    marginBottom: 20,
  },
  cityMapView: {
    width: "90%",
  },
  forecastMapView: {
    width: "100%",
  },
  gradient: {
    height: "100%",
    paddingVertical: 15,
  },
  row: {
    justifyContent: "space-around",
  },
});
