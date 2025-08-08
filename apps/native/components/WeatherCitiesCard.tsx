import { Link } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface WeatherCardProps {
  id: number;
  city: string;
}

function WeatherCitiesCard({ id, city }: WeatherCardProps) {
  const iconUrl = `https://openweathermap.org/img/wn/${"01d"}@2x.png`;
  return (
    <Link key={id} href={`/${city}`} asChild style={styles.container}>
      <TouchableOpacity style={styles.touchable}>
        <Image
          source={{ uri: iconUrl }}
          style={styles.weatherIcon}
          resizeMode="contain"
        />
        <View style={styles.wrapper}>
          <Text style={styles.text}>{city}</Text>
          <Text style={styles.temp}>00°C</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
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
  container: {
    marginInline: 25,
    height: 120,
    borderWidth: 2,
    borderColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  wrapper: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#6e6e6e",
    fontWeight: "800",
  },
  temp: {
    fontSize: 40,
    color: "#6e6e6e",
    fontWeight: "700",
  },
  weatherIcon: {
    height: 75,
    width: 75,
    backgroundColor: "white",
  },
});

export default WeatherCitiesCard;
