import { Stack } from "expo-router";
import React from "react";
import { ScrollView, StatusBar, Text, View } from "react-native";
import WeatherCard from "../../components/WeatherCard";

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
        <StatusBar style="auto" />
      </View>
    </>
  );
}
