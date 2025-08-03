import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import useLocation from "../../hooks/useGeolocation";

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
      <View>
        <Text>Current Location {JSON.stringify(location)}</Text>
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
