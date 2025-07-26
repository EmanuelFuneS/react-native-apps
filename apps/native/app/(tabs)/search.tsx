import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../../components/SearchBar";

export default function search() {
  return (
    <View>
      <Text>search</Text>
      <SearchBar style={styles.searchBar} />
    </View>
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
