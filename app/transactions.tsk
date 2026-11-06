
import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const transactions = [
  { name: "ETH", type: "BUY", value: "$2,450", network: "Ethereum" },
  { name: "BNB", type: "SELL", value: "$1,280", network: "BNB Chain" },
  { name: "SOL", type: "BUY", value: "$890", network: "Solana" }
];

export default function TransactionsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>TRANSACTIONS</Text>
      <Text style={styles.subtitle}>
        Riwayat aktivitas wallet
      </Text>

      {transactions.map((item, index) => (
        <View key={index} style={styles.card}>
          <View>
            <Text style={styles.coin}>{item.name}</Text>
            <Text style={styles.network}>{item.network}</Text>
          </View>
          <View style={styles.right}>
            <Text style={{
              color: item.type === "BUY" ? "#16C784" : "#EA3943",
              fontWeight: "bold"
            }}>
              {item.type}
            </Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
        </View>
      ))}

      <Text style={styles.notice}>
        Data ini masih contoh. Riwayat transaksi asli membutuhkan
        integrasi blockchain indexer.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#080D18", padding: 20 },
  title: { color: "#FFFFFF", fontSize: 24, fontWeight: "900", marginTop: 45 },
  subtitle: { color: "#8B9BB4", marginTop: 8, marginBottom: 25 },
  card: {
    backgroundColor: "#111B2D",
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  coin: { color: "#FFFFFF", fontWeight: "bold", fontSize: 16 },
  network: { color: "#75849C", fontSize: 11, marginTop: 6 },
  right: { alignItems: "flex-end" },
  value: { color: "#FFFFFF", marginTop: 6, fontWeight: "bold" },
  notice: { color: "#75849C", fontSize: 11, marginTop: 20, lineHeight: 18 }
});
        
