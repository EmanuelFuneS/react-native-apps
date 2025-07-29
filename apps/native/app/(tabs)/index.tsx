import { StyleSheet } from "react-native";

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

export default function index() {
  return <></>;
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
