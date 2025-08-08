import { Image, StyleSheet, Text, View } from "react-native";

const WeatherForecastCard = () => {
  const iconUrl = `https://openweathermap.org/img/wn/${"01d"}@2x.png`;
  return (
    <View>
      <Text>Day</Text>
      <Image
        source={{ uri: iconUrl }}
        style={styles.weatherIcon}
        resizeMode="contain"
      />
      <Text>Temp</Text>
    </View>
  );
};

export default WeatherForecastCard;

const styles = StyleSheet.create({
  container: {},
  weatherIcon: {
    height: 120,
    width: 120,
    backgroundColor: "white",
  },
  text: {},
});
