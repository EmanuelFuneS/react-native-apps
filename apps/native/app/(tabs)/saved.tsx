import { Stack } from "expo-router";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import WeatherCard from "../../components/WeatherCard";

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
          <Text>Mis Ciudades</Text>
          {testData.length === 0 ? (
            <Text style={{ color: "gray" }}>No tienes Ciudades guardadas</Text>
          ) : (
            testData.map((city, index) => (
              <WeatherCard id={index} city={city} />
            ))
          )}
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
    paddingTop: 20,
  },
  searchBar: {
    width: "90%",
    marginBottom: 20,
  },
  cityMapView: {
    width: "90%",
  },
});
