import { Button } from "@repo/ui";
import React, { useState } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface SearchBarProps {
  style?: StyleProp<ViewStyle>;
  onSearch?: (city: string) => void;
}

function SearchBar({ style, onSearch }: SearchBarProps) {
  /*   const inputRef = useRef<TextInput>(null); */
  const [city, setCity] = useState<string>("");

  const handleSearch = () => {
    if (city.trim() && onSearch) {
      onSearch(city);
      setCity("");
    }
  };

  /*   useEffect(() => {
    useCallback(() => {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }, []);
  }, []);
 */
  return (
    <SafeAreaView style={[styles.container, style]}>
      <Text style={styles.header}>Buscar Ciudad</Text>
      <View>
        <TextInput
          /*  ref={inputRef} */
          style={styles.input}
          placeholder="Escribe una ciudad"
          value={city}
          onChangeText={setCity}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
        />
        <Button
          onClick={() => {
            console.log("Pressed!");
            alert("Pressed!");
          }}
          text="Boop"
        />
      </View>
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
    padding: 4,
  },
});

export default SearchBar;
