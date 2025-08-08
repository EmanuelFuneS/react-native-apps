import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import WeatherCard from "../../components/WeatherCitiesCard";

const testData = [
  "Buenos Aires",
  "Moscow",
  "France",
  "New York",
  "Orando",
  "Cordoba",
  "Madrid",
  "Barcelona",
];

export default function saved() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View style={styles.container}>
        <ScrollView style={styles.cityMapView}>
          <LinearGradient
            colors={["#5bc7eb", "#175b80"]}
            style={styles.gradient}
          >
            {testData.length === 0 ? (
              <Text style={{ color: "gray" }}>
                No tienes Ciudades guardadas
              </Text>
            ) : (
              testData.map((city, index) => (
                <WeatherCard id={index} city={city} />
              ))
            )}
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
    width: "100%",
  },
  gradient: {
    height: "100%",
    paddingVertical: 15,
  },
});
