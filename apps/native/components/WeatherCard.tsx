import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface WeatherCardProps {
  id: number;
  city: string;
}

function WeatherCard({ id, city }: WeatherCardProps) {
  return (
    <Link key={id} href={`/${city}`} asChild style={styles.container}>
      <TouchableOpacity style={styles.touchable}>
        <Text>{city}</Text>
        <Text>temperatura</Text>
        <Text>today</Text>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    borderWidth: 2,
    borderColor: "#ccc",
  },
  touchable: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 3,
  },
  body: {},
});

export default WeatherCard;
