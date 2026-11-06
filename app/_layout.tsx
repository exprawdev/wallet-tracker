
import React from "react";
import { Tabs } from "expo-router";
import { Text } from "react-native";

function TabIcon({ label }: { label: string }) {
  return <Text style={{ fontSize: 17 }}>{label}</Text>;
}

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#111B2D",
          borderTopColor: "#26344A",
          height: 65,
          paddingBottom: 8,
          paddingTop: 8
        },
        tabBarActiveTintColor: "#16C784",
        tabBarInactiveTintColor: "#75849C"
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: () => <TabIcon label="⌂" /> }} />
      <Tabs.Screen name="wallets" options={{ title: "Wallets", tabBarIcon: () => <TabIcon label="◈" /> }} />
      <Tabs.Screen name="transactions" options={{ title: "Activity", tabBarIcon: () => <TabIcon label="⇄" /> }} />
      <Tabs.Screen name="chart" options={{ title: "Chart", tabBarIcon: () => <TabIcon label="▥" /> }} />
      <Tabs.Screen name="analytics" options={{ title: "Analytics", tabBarIcon: () => <TabIcon label="▤" /> }} />
      <Tabs.Screen name="scanner" options={{ title: "Scanner", tabBarIcon: () => <TabIcon label="⌕" /> }} />
      <Tabs.Screen name="browser" options={{ title: "Browser", tabBarIcon: () => <TabIcon label="🌐" /> }} />
      <Tabs.Screen
  name="network"
  options={{
    title: "Network",
    tabBarIcon: () => <TabIcon label="◎" />
  }}
/> 
  </Tabs>
  );
}
