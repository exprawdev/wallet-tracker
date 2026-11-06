
import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const checks = [
  { name: "Contract Verification", status: "PENDING" },
  { name: "Honeypot Detection", status: "PENDING" },
  { name: "Liquidity Analysis", status: "PENDING" },
  { name: "Holder Concentration", status: "PENDING" },
  { name: "Ownership Analysis", status: "PENDING" },
  { name: "Trading Tax Analysis", status: "PENDING" }
];

export default function ScannerScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>TOKEN SCANNER</Text>
      <Text style={styles.subtitle}>
        Smart contract security analysis
      </Text>

      <View style={styles.inputPanel}>
        <Text style={styles.label}>CONTRACT ADDRESS</Text>
        <Text style={styles.placeholder}>
          Scanner integration coming soon
        </Text>
      </View>

      <Text style={styles.sectionTitle}>SECURITY CHECKLIST</Text>

      {checks.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.pending}>{item.status}</Text>
        </View>
      ))}

      <View style={styles.notice}>
        <Text style={styles.noticeText}>
          Pemeriksaan belum terhubung ke layanan analisis
          kontrak. Jangan menganggap token aman hanya
          berdasarkan tampilan checklist ini.
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
    fontSize: 24,
    fontWeight: "900",
    marginTop: 45
  },
  subtitle: {
    color: "#8B9BB4",
    marginTop: 8,
    marginBottom: 25
  },
  inputPanel: {
    backgroundColor: "#111B2D",
    padding: 18,
    borderRadius: 13,
    marginBottom: 25
  },
  label: {
    color: "#8B9BB4",
    fontSize: 10,
    fontWeight: "bold"
  },
  placeholder: {
    color: "#75849C",
    marginTop: 15,
    fontSize: 12
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 14
  },
  card: {
    backgroundColor: "#111B2D",
    padding: 17,
    borderRadius: 11,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  name: {
    color: "#FFFFFF",
    fontSize: 12
  },
  pending: {
    color: "#E6B85C",
    fontSize: 10,
    fontWeight: "bold"
  },
  notice: {
    backgroundColor: "#30291B",
    padding: 15,
    borderRadius: 10,
    marginTop: 15
  },
  noticeText: {
    color: "#E6B85C",
    fontSize: 11,
    lineHeight: 18
  }
});
