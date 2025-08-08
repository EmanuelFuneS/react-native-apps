import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";
import Divider from "../components/ui/Divider";

const WeatherTodayCard = ({ city, weatherData }) => {
  if (!weatherData) {
    return <Text>Cargando datos del clima...</Text>;
  }

  const {
    main: { temp, humidity },
    wind: { deg, speed },
    weather,
  } = weatherData;

  const weatherMain = weather[0].main;
  const weatherIcon = weather[0].icon;

  const getWindDirectionIcon = (degrees) => {
    // Puedes implementar una lógica más detallada aquí
    if (degrees > 45 && degrees < 135) return "arrow-top-right-thin";
    if (degrees > 135 && degrees < 225) return "arrow-bottom-right-thin";
    if (degrees > 225 && degrees < 315) return "arrow-bottom-left-thin";
    return "arrow-top-left-thin";
  };

  const getWindInfo = (deg, speed) => {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const index = Math.round((deg % 360) / 45);
    const direction = directions[index % 8];

    const speedKmH = Math.round(speed * 3.6);

    if (speedKmH) {
      return `${direction} ${speedKmH} KM/H`;
    }
  };
  const iconUrl = `https://openweathermap.org/img/wn/${"01d"}@2x.png`;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hoy</Text>
      <Divider />

      <View style={styles.subHeader}>
        <Text style={styles.text}>Fecha</Text>
        <Text style={styles.text}>Hora</Text>
      </View>
      <Divider />

      <View style={styles.containerBody}>
        <View style={styles.weatherInfoLeft}>
          <Image
            source={{ uri: iconUrl }}
            style={styles.weatherIcon}
            resizeMode="contain"
          />
          <View style={styles.windInfo}>
            <MaterialCommunityIcons
              name={getWindDirectionIcon(deg)}
              size={40}
              color="#057e9a"
            />
            <Text style={styles.windText}>{getWindInfo(deg, speed)}</Text>
          </View>
        </View>

        <View style={styles.weatherInfoRight}>
          <View style={styles.info}>
            <Text style={styles.temperatureText}>{Math.round(temp)}°C</Text>
            <Text style={styles.cityText}>{city}</Text>
          </View>
          <Text style={styles.humidityText}>Humidity: {humidity}%</Text>
        </View>
      </View>
      <Divider />
      <View style={styles.extraData}>
        <Text style={styles.text}>Alerta</Text>
      </View>
    </View>
  );
};

export default WeatherTodayCard;

const styles = StyleSheet.create({
  weatherIcon: {
    width: 120,
    height: 120,
    backgroundColor: "#FFF",
  },
  container: {
    minHeight: "50%",
    margin: 40,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    fontSize: 28,
    color: "#6e6e6e",
    fontWeight: "800",
  },
  subHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerBody: {
    minHeight: 150,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    paddingVertical: 10,
  },
  weatherInfoLeft: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  windInfo: {
    flexDirection: "column",
    alignItems: "center",
  },
  windText: {
    color: "#057e9a",
    fontWeight: "800",
    fontSize: 14,
  },
  weatherInfoRight: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  info: {
    minHeight: 120,
    flexDirection: "column",
    justifyContent: "center",
  },

  temperatureText: {
    fontSize: 50,
    fontWeight: "700",
    color: "#6e6e6e",
  },
  cityText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#6e6e6e",
  },
  humidityText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#6e6e6e",
  },
  text: {
    color: "#BCBCBC",
    fontSize: 18,
    fontWeight: "500",
  },
  extraData: {
    paddingVertical: 18,
  },
});
