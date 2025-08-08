import { Stack, Tabs } from "expo-router";
import { Text } from "react-native";

export default function TabLayout() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "ClimApp",
          headerStyle: {
            backgroundColor: "#5bc7eb",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#50bbe0", // Fondo del tab bar
            borderTopColor: "#50bbe0",
          },
        }}
      >
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
