import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function CityDetailPage() {
  const { city } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{ title: `${city}` }} />
      <SafeAreaView>
        <Text>{city}</Text>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({});
