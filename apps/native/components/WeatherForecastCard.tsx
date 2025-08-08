import { Image, StyleSheet, Text, View } from "react-native";

interface WeatherForecastCardProps {
  date: string;
  iconUrl?: string;
  temp: string;
}

const WeatherForecastCard = ({
  date,
  iconUrl,
  temp,
}: WeatherForecastCardProps) => {
  const defaultIcon = `https://openweathermap.org/img/wn/${"01d"}@2x.png`;
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>{date || "Day"}</Text>
        <View style={styles.wrapper}>
          <Image
            source={{ uri: iconUrl || defaultIcon }}
            style={styles.weatherIcon}
            resizeMode="contain"
          />
          <Text style={styles.text}>{temp || "Temp"}</Text>
        </View>
      </View>
    </>
  );
};

export default WeatherForecastCard;

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 10,
    marginInline: 40,
    marginVertical: 10,
    borderRadius: 10,
    paddingLeft: 25,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingInline: 15,
  },
  weatherIcon: {
    height: 100,
    width: 100,
    backgroundColor: "white",
  },
  text: {
    fontSize: 35,
    fontWeight: "600",
    color: "#6e6e6e",
  },
});
