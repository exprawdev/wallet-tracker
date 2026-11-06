
import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking
} from "react-native";

import { BLOCKCHAINS } from "../services/blockchain/networks";

export default function NetworkScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>NETWORK MONITOR</Text>
      <Text style={styles.subtitle}>
        Multi-chain infrastructure
      </Text>

      <View style={styles.summary}>
        <Text style={styles.summaryLabel}>SUPPORTED NETWORK CONFIGURATIONS</Text>
        <Text style={styles.summaryValue}>
          {BLOCKCHAINS.length}
        </Text>
        <Text style={styles.summaryNote}>
          Monitoring connections not configured yet
        </Text>
      </View>

      {BLOCKCHAINS.map((network) => (
        <View key={network.id} style={styles.card}>
          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{network.name}</Text>
              <Text style={styles.detail}>
                {network.type} · {network.nativeCurrency}
              </Text>
              {network.chainId !== undefined && (
                <Text style={styles.detail}>
                  Chain ID: {network.chainId}
                </Text>
              )}
            </View>

            <View style={styles.badge}>
              <Text style={styles.badgeText}>READY FOR SETUP</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => Linking.openURL(network.explorer)}
            style={styles.explorer}
          >
            <Text style={styles.explorerText}>
              OPEN BLOCK EXPLORER ↗
            </Text>
          </TouchableOpacity>
        </View>
      ))}

      <Text style={styles.notice}>
        Status READY FOR SETUP hanya menunjukkan konfigurasi jaringan
        tersedia. Data transaksi real-time membutuhkan RPC atau
        blockchain indexer dan backend monitoring.
      </Text>
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
    marginBottom: 22
  },
  summary: {
    backgroundColor: "#14213A",
    padding: 20,
    borderRadius: 14,
    marginBottom: 22
  },
  summaryLabel: {
    color: "#8B9BB4",
    fontSize: 10
  },
  summaryValue: {
    color: "#16C784",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 8
  },
  summaryNote: {
    color: "#8B9BB4",
    fontSize: 11,
    marginTop: 5
  },
  card: {
    backgroundColor: "#111B2D",
    padding: 17,
    borderRadius: 12,
    marginBottom: 12
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  name: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold"
  },
  detail: {
    color: "#8B9BB4",
    fontSize: 11,
    marginTop: 5
  },
  badge: {
    backgroundColor: "#30291B",
    padding: 8,
    borderRadius: 7
  },
  badgeText: {
    color: "#E6B85C",
    fontSize: 9,
    fontWeight: "bold"
  },
  explorer: {
    borderTopWidth: 1,
    borderTopColor: "#26344A",
    marginTop: 15,
    paddingTop: 13
  },
  explorerText: {
    color: "#16C784",
    fontSize: 10,
    fontWeight: "bold"
  },
  notice: {
    color: "#8B9BB4",
    fontSize: 11,
    lineHeight: 18,
    marginVertical: 20
  }
});
