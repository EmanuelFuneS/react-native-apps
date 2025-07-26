import { Stack, Tabs } from "expo-router";
import React from "react";
import { Text } from "react-native";

export default function TabLayout() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "ClimApp",
          headerStyle: {
            backgroundColor: "#007AFF",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "Inicio",
            tabBarIcon: ({ color }) => <Text style={{ color }}>🏠</Text>,
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: "Buscar",
            tabBarIcon: ({ color }) => <Text style={{ color }}>🔍</Text>,
          }}
        />
      </Tabs>
    </>
  );
}
