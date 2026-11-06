
import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const stats = [
  { title: "TOTAL PROFIT / LOSS", value: "$2,450", color: "#16C784" },
  { title: "ROI", value: "+18.5%", color: "#16C784" },
  { title: "WIN RATE", value: "68%", color: "#16C784" },
  { title: "TOTAL TRADES", value: "124", color: "#FFFFFF" },
  { title: "AVERAGE BUY", value: "$125", color: "#FFFFFF" },
  { title: "AVERAGE SELL", value: "$164", color: "#FFFFFF" }
];

export default function AnalyticsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>WALLET ANALYTICS</Text>
      <Text style={styles.subtitle}>
        Trading performance overview
      </Text>

      <View style={styles.grid}>
        {stats.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.label}>{item.title}</Text>
            <Text style={[styles.value, { color: item.color }]}>
              {item.value}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.panel}>
        <Text style={styles.panelTitle}>PERFORMANCE</Text>
        <Text style={styles.description}>
          Analytics akan menghitung profit dan loss, ROI,
          win rate, rata-rata pembelian, penjualan,
          serta waktu kepemilikan token.
        </Text>
        <Text style={styles.warning}>
          Data yang ditampilkan saat ini adalah contoh,
          bukan hasil transaksi wallet asli.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080D18",
    padding: 20
  },
  title: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "900",
    marginTop: 45
  },
  subtitle: {
    color: "#8B9BB4",
    marginTop: 8,
    marginBottom: 25
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12
  },
  card: {
    width: "47%",
    backgroundColor: "#111B2D",
    padding: 17,
    borderRadius: 13
  },
  label: {
    color: "#8B9BB4",
    fontSize: 9,
    fontWeight: "bold"
  },
  value: {
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 12
  },
  panel: {
    backgroundColor: "#111B2D",
    padding: 18,
    borderRadius: 13,
    marginTop: 25
  },
  panelTitle: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14
  },
  description: {
    color: "#AAB8CE",
    fontSize: 12,
    lineHeight: 20,
    marginTop: 12
  },
  warning: {
    color: "#E6B85C",
    fontSize: 11,
    lineHeight: 18,
    marginTop: 15
  }
});
