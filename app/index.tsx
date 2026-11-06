
import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
} from "react-native";

const wallets = [
  {
    name: "Wallet Alpha",
    address: "0x71C...92F1",
    network: "Ethereum",
    activity: "BUY",
    coin: "ETH",
    amount: "$2,450",
    color: "#16C784",
  },
  {
    name: "Wallet Beta",
    address: "0x82A...71D2",
    network: "BNB Chain",
    activity: "SELL",
    coin: "BNB",
    amount: "$1,280",
    color: "#EA3943",
  },
  {
    name: "Wallet Gamma",
    address: "SoL...8K2P",
    network: "Solana",
    activity: "BUY",
    coin: "SOL",
    amount: "$890",
    color: "#16C784",
  },
];

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.brand}>TX WALLET</Text>
            <Text style={styles.subtitle}>TRACKER DASHBOARD</Text>
          </View>
          <View style={styles.status}>
            <View style={styles.dot} />
            <Text style={styles.statusText}>MONITORING</Text>
          </View>
        </View>

        <View style={styles.balanceCard}>
          <Text style={styles.label}>TOTAL TRACKED WALLETS</Text>
          <Text style={styles.balance}>03</Text>
          <Text style={styles.muted}>
            Demo dashboard • No live connection yet
          </Text>
        </View>

        <View style={styles.stats}>
          <View style={styles.statCard}>
            <Text style={styles.label}>BUY ALERTS</Text>
            <Text style={styles.green}>02</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.label}>SELL ALERTS</Text>
            <Text style={styles.red}>01</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>TRACKED WALLETS</Text>

        {wallets.map((wallet, index) => (
          <View key={index} style={styles.walletCard}>
            <View style={styles.walletHeader}>
              <Text style={styles.walletName}>{wallet.name}</Text>
              <Text style={{ color: wallet.color, fontWeight: "bold" }}>
                {wallet.activity}
              </Text>
            </View>
            <Text style={styles.address}>{wallet.address}</Text>
            <View style={styles.walletFooter}>
              <Text style={styles.network}>{wallet.network}</Text>
              <Text style={styles.amount}>
                {wallet.coin} · {wallet.amount}
              </Text>
            </View>
          </View>
        ))}

        <Text style={styles.sectionTitle}>MARKET OVERVIEW</Text>

        <View style={styles.marketCard}>
          <Text style={styles.marketName}>ETHEREUM</Text>
          <Text style={styles.marketValue}>ETH</Text>
          <Text style={styles.muted}>
            Live market data integration coming next
          </Text>
        </View>

        <View style={styles.marketCard}>
          <Text style={styles.marketName}>SOLANA</Text>
          <Text style={styles.marketValue}>SOL</Text>
          <Text style={styles.muted}>
            Live market data integration coming next
          </Text>
        </View>

        <Text style={styles.footer}>
          TX WALLET TRACKER • VERSION 1.0.0
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080D18",
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 55,
    marginBottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brand: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "900",
    letterSpacing: 1,
  },
  subtitle: {
    color: "#75849C",
    fontSize: 10,
    marginTop: 4,
    letterSpacing: 2,
  },
  status: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#132B28",
    padding: 9,
    borderRadius: 20,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: "#16C784",
    marginRight: 6,
  },
  statusText: {
    color: "#16C784",
    fontSize: 9,
    fontWeight: "bold",
  },
  balanceCard: {
    backgroundColor: "#14213A",
    padding: 22,
    borderRadius: 18,
    marginBottom: 15,
  },
  label: {
    color: "#8B9BB4",
    fontSize: 10,
    fontWeight: "bold",
  },
  balance: {
    color: "#FFFFFF",
    fontSize: 43,
    fontWeight: "bold",
    marginVertical: 10,
  },
  muted: {
    color: "#75849C",
    fontSize: 11,
    marginTop: 8,
  },
  stats: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 25,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#111B2D",
    padding: 18,
    borderRadius: 14,
  },
  green: {
    color: "#16C784",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 8,
  },
  red: {
    color: "#EA3943",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 8,
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 14,
    marginTop: 8,
  },
  walletCard: {
    backgroundColor: "#111B2D",
    padding: 17,
    borderRadius: 14,
    marginBottom: 12,
  },
  walletHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  walletName: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
  },
  address: {
    color: "#75849C",
    fontSize: 12,
    marginTop: 10,
  },
  walletFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  network: {
    color: "#8B9BB4",
    fontSize: 11,
  },
  amount: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 11,
  },
  marketCard: {
    backgroundColor: "#111B2D",
    padding: 18,
    borderRadius: 14,
    marginBottom: 12,
  },
  marketName: {
    color: "#8B9BB4",
    fontSize: 11,
  },
  marketValue: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 7,
  },
  footer: {
    color: "#526078",
    textAlign: "center",
    fontSize: 10,
    marginVertical: 30,
  },
});
