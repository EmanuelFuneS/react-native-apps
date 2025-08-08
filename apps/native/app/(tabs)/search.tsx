import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import SearchBar from "../../components/SearchBar";

export default function search() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <LinearGradient colors={["#5bc7eb", "#175b80"]} style={styles.gradient}>
        <View style={styles.container}>
          <SearchBar />
        </View>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  searchBar: {
    width: "90%",
    marginBottom: 20,
  },

  gradient: {
    width: "100%",
    height: "100%",
    paddingVertical: 15,
  },
});
