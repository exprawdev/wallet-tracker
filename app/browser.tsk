
import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Alert,
} from "react-native";

const websites = [
  {
    name: "DEXScreener",
    description: "Melihat harga token dan pasangan trading",
    url: "https://dexscreener.com",
    network: "Multi-chain",
  },
  {
    name: "Uniswap",
    description: "Decentralized exchange",
    url: "https://app.uniswap.org",
    network: "Ethereum dan EVM",
  },
  {
    name: "Etherscan",
    description: "Melihat transaksi Ethereum",
    url: "https://etherscan.io",
    network: "Ethereum",
  },
  {
    name: "BscScan",
    description: "Melihat transaksi BNB Chain",
    url: "https://bscscan.com",
    network: "BNB Chain",
  },
  {
    name: "Solscan",
    description: "Melihat transaksi Solana",
    url: "https://solscan.io",
    network: "Solana",
  },
  {
    name: "TON Explorer",
    description: "Melihat transaksi jaringan TON",
    url: "https://tonscan.org",
    network: "TON",
  },
];

export default function BrowserScreen() {
  async function openWebsite(url: string) {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Tidak dapat membuka website");
      }
    } catch {
      Alert.alert("Kesalahan", "Website tidak dapat dibuka.");
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>WEB3 EXPLORER</Text>
      <Text style={styles.subtitle}>
        Akses layanan Web3 dan blockchain
      </Text>

      <View style={styles.warning}>
        <Text style={styles.warningTitle}>SECURITY NOTICE</Text>
        <Text style={styles.warningText}>
          Website dibuka melalui browser eksternal. Periksa
          alamat domain sebelum menghubungkan wallet.
          Jangan pernah memberikan seed phrase atau private key.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>WEB3 SERVICES</Text>

      {websites.map((site) => (
        <TouchableOpacity
          key={site.name}
          style={styles.card}
          onPress={() => openWebsite(site.url)}
        >
          <View style={styles.cardContent}>
            <Text style={styles.siteName}>{site.name}</Text>
            <Text style={styles.description}>{site.description}</Text>
            <Text style={styles.network}>{site.network}</Text>
            <Text style={styles.domain}>{site.url}</Text>
          </View>
          <Text style={styles.arrow}>↗</Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.footer}>
        TX WALLET TRACKER · WEB3 EXPLORER
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#080D18", padding: 20 },
  title: { color: "#FFFFFF", fontSize: 24, fontWeight: "900", marginTop: 45 },
  subtitle: { color: "#8B9BB4", fontSize: 12, marginTop: 8, marginBottom: 22 },
  warning: { backgroundColor: "#30291B", padding: 16, borderRadius: 12, marginBottom: 25 },
  warningTitle: { color: "#E6B85C", fontSize: 12, fontWeight: "bold" },
  warningText: { color: "#E6B85C", fontSize: 11, lineHeight: 18, marginTop: 8 },
  sectionTitle: { color: "#FFFFFF", fontSize: 14, fontWeight: "bold", marginBottom: 14 },
  card: { backgroundColor: "#111B2D", padding: 17, borderRadius: 12, marginBottom: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  cardContent: { flex: 1 },
  siteName: { color: "#FFFFFF", fontSize: 15, fontWeight: "bold" },
  description: { color: "#AAB8CE", fontSize: 11, marginTop: 7 },
  network: { color: "#16C784", fontSize: 10, marginTop: 8 },
  domain: { color: "#75849C", fontSize: 10, marginTop: 5 },
  arrow: { color: "#16C784", fontSize: 23, marginLeft: 10 },
  footer: { color: "#526078", fontSize: 10, textAlign: "center", marginVertical: 25 },
});
