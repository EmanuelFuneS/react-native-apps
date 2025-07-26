import AsyncStorage from "@react-native-async-storage/async-storage";
import { Tabs, useRouter, useSegments } from "expo-router";
import React, { createContext, useRef } from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";

export const SearchContext = createContext();

export default function TabLayout() {
  const segments = useSegments();
  const router = useRouter();
  const searchInputRef = useRef<TextInput>(null);

  const isHome = segments.length === 1 && segments[0] === "(tabs)";

  const handleSearchPress = () => {
    if (isHome) {
      searchInputRef.current?.focus();
    } else {
      router.push("/(tabs)/search");
    }
  };
  const handleHomePress = () => {
    saveCurrentRoute();
    router.push("/(tabs)");
  };

  const handleForwardPress = async () => {
    try {
      const lastRoute = await AsyncStorage.getItem("lastRoute");
      if (lastRoute) {
        router.push(lastRoute);
      }
    } catch (error) {
      console.log("No last route found");
    }
  };

  const saveCurrentRoute = async () => {
    try {
      const currentRoute = `/${segments.join("")}`;
      await AsyncStorage.setItem("lastRoute", currentRoute);
    } catch (error) {
      console.log("Error saving route");
    }
  };

  return (
    <SearchContext.Provider value={{ searchInputRef }}>
      <Tabs>
        {!isHome && (
          <Tabs.Screen
            name="index"
            options={{
              title: "Inicio",
              tabBarIcon: ({ color }) => <Text style={{ color }}>🏠</Text>,
              tabBarButton: (props) => (
                <TouchableOpacity {...props} onPress={handleHomePress} />
              ),
            }}
            listeners={{
              tabPress: (e) => {
                e.preventDefault();
                handleHomePress();
              },
            }}
          />
        )}
        <Tabs.Screen
          name="search"
          options={{
            title: "Buscar",
            tabBarIcon: ({ color }) => <Text style={{ color }}>🔍</Text>,
            tabBarButton: (props) => (
              <TouchableOpacity {...props} onPress={handleSearchPress} />
            ),
          }}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              handleSearchPress();
            },
          }}
        />
        {isHome && (
          <Tabs.Screen
            name="forward"
            options={{
              title: "Adelante",
              tabBarIcon: ({ color }) => <Text style={{ color }}>→</Text>,
              tabBarButton: (props) => (
                <TouchableOpacity {...props} onPress={handleForwardPress} />
              ),
            }}
            listeners={{
              tabPress: (e) => {
                e.preventDefault();
                handleForwardPress();
              },
            }}
          />
        )}
      </Tabs>
    </SearchContext.Provider>
  );
}
