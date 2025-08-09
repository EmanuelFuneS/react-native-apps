import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import { useEffect } from "react";
import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import WeatherForecastCard from "../../components/WeatherForecastCard";
import WeatherTodayCard from "../../components/weatherTodayCard";
import useCurrentWeather from "../../lib/hooks/useCurrentWeather";

export default function index() {
  const { currentWeather } = useCurrentWeather();
  console.log("weather by name", currentWeather);

  useEffect(() => {}, [currentWeather]);

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
            {/* <Text>Current Location {JSON.stringify(location)}</Text> */}
            <WeatherTodayCard data={currentWeather} />
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
