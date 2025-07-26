import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import TabLayout from "./(tabs)/_layout";

export default function CityDetailPage() {
  const { city } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen
        options={{
          title: "Cities",
          headerStyle: {
            backgroundColor: "#007AFF",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <SafeAreaView>
        <Text>{city}</Text>
      </SafeAreaView>
      <TabLayout />
    </>
  );
}

const styles = StyleSheet.create({});
