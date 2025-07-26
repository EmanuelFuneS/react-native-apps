import React, { useState } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  ViewStyle,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface SearchBarProps {
  style?: StyleProp<ViewStyle>;
  onSearch?: (city: string) => void;
}

function SearchBar({ style, onSearch }: SearchBarProps) {
  const [city, setCity] = useState<string>("");

  const handleSearch = () => {
    if (city.trim() && onSearch) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <SafeAreaView style={[styles.container, style]}>
      <Text style={styles.header}>Buscar Ciudad</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe una ciudad"
        value={city}
        onChangeText={setCity}
        onSubmitEditing={handleSearch}
        returnKeyType="search"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 36,
  },
  header: {
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    fontFamily: "16",
  },
});

export default SearchBar;
