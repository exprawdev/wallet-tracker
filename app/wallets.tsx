
import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  StyleSheet,
  Alert,
  ActivityIndicator
} from "react-native";
import { useRouter, useFocusEffect } from "expo-router";
import {
  getWallets,
  addWallet,
  deleteWallet,
  WalletRecord
} from "../services/walletService";
import { getCurrentUser } from "../services/auth";

const NETWORKS = [
  { id: "ethereum", name: "Ethereum" },
  { id: "bsc", name: "BNB Chain" },
  { id: "polygon", name: "Polygon" },
  { id: "arbitrum", name: "Arbitrum" },
  { id: "base", name: "Base" },
  { id: "optimism", name: "Optimism" },
  { id: "avalanche", name: "Avalanche" },
  { id: "solana", name: "Solana" },
  { id: "ton", name: "TON" }
];

export default function WalletsScreen() {
  const router = useRouter();

  const [wallets, setWallets] = useState<WalletRecord[]>([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [network, setNetwork] = useState("ethereum");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const loadWallets = useCallback(async () => {
    try {
      const user = await getCurrentUser();

      if (!user) {
        router.replace("/login");
        return;
      }

      const data = await getWallets();
      setWallets(data);
    } catch (error) {
      Alert.alert(
        "Gagal memuat wallet",
        error instanceof Error ? error.message : "Terjadi kesalahan."
      );
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    loadWallets();
  }, [loadWallets]);

  useFocusEffect(
    useCallback(() => {
      loadWallets();
    }, [loadWallets])
  );

  async function handleAddWallet() {
    if (!name.trim() || !address.trim()) {
      Alert.alert("Perhatian", "Nama dan alamat wallet wajib diisi.");
      return;
    }

    if (address.trim().length < 20) {
      Alert.alert("Alamat tidak valid", "Periksa kembali alamat wallet.");
      return;
    }

    try {
      setSaving(true);

      await addWallet(
        name.trim(),
        address.trim(),
        network
      );

      setName("");
      setAddress("");

      await loadWallets();

      Alert.alert("Berhasil", "Wallet tersimpan di Supabase.");
    } catch (error) {
      Alert.alert(
        "Gagal menyimpan",
        error instanceof Error ? error.message : "Terjadi kesalahan."
      );
    } finally {
      setSaving(false);
    }
  }

  function confirmDelete(walletId: string) {
    Alert.alert(
      "Hapus wallet",
      "Apakah Anda yakin ingin menghapus wallet ini?",
      [
        { text: "Batal", style: "cancel" },
        {
          text: "Hapus",
          style: "destructive",
          onPress: async () => {
            try {
              await deleteWallet(walletId);
              await loadWallets();
            } catch (error) {
              Alert.alert(
                "Gagal",
                error instanceof Error ? error.message : "Terjadi kesalahan."
              );
            }
          }
        }
      ]
    );
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color="#48D6C6" size="large" />
        <Text style={styles.muted}>Memuat wallet dari Supabase...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Wallets</Text>
      <Text style={styles.subtitle}>
        Wallet tersimpan secara online di Supabase.
      </Text>

      <View style={styles.form}>
        <Text style={styles.label}>Nama Wallet</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: Main Wallet"
          placeholderTextColor="#78859B"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Alamat Wallet</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan public wallet address"
          placeholderTextColor="#78859B"
          autoCapitalize="none"
          value={address}
          onChangeText={setAddress}
        />

        <Text style={styles.label}>Pilih Blockchain</Text>

        <View style={styles.networks}>
          {NETWORKS.map((item) => (
            <Pressable
              key={item.id}
              onPress={() => setNetwork(item.id)}
              style={[
                styles.networkButton,
                network === item.id && styles.networkSelected
              ]}
            >
              <Text
                style={[
                  styles.networkText,
                  network === item.id && styles.networkTextSelected
                ]}
              >
                {item.name}
              </Text>
            </Pressable>
          ))}
        </View>

        <Pressable
          style={styles.addButton}
          onPress={handleAddWallet}
          disabled={saving}
        >
          {saving ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.addText}>+ Add Wallet to Cloud</Text>
          )}
        </Pressable>
      </View>

      <Text style={styles.sectionTitle}>
        Saved Wallets ({wallets.length})
      </Text>

      <FlatList
        data={wallets}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.empty}>
            Belum ada wallet yang tersimpan.
          </Text>
        }
        renderItem={({ item }) => (
          <View style={styles.walletCard}>
            <View style={styles.walletInfo}>
              <Text style={styles.walletName}>{item.name}</Text>
              <Text style={styles.networkName}>
                {NETWORKS.find((n) => n.id === item.network_id)?.name
                  ?? item.network_id}
              </Text>
              <Text style={styles.address}>
                {item.address}
              </Text>
              <Text style={styles.active}>
                {item.is_active ? "● Active" : "○ Inactive"}
              </Text>
            </View>

            <Pressable
              onPress={() => confirmDelete(item.id)}
              style={styles.deleteButton}
            >
              <Text style={styles.deleteText}>Delete</Text>
            </Pressable>
          </View>
        )}
      />

      <Text style={styles.footer}>
        Public addresses only. Never enter a seed phrase or private key.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1020",
    padding: 18,
    paddingTop: 55
  },
  center: {
    flex: 1,
    backgroundColor: "#0B1020",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "#FFFFFF",
    fontSize: 27,
    fontWeight: "bold"
  },
  subtitle: {
    color: "#9BA5B8",
    marginTop: 6,
    marginBottom: 20
  },
  form: {
    backgroundColor: "#151F34",
    padding: 15,
    borderRadius: 14
  },
  label: {
    color: "#FFFFFF",
    marginBottom: 7,
    marginTop: 10
  },
  input: {
    backgroundColor: "#0B1020",
    borderColor: "#2B3852",
    borderWidth: 1,
    borderRadius: 9,
    color: "#FFFFFF",
    padding: 12
  },
  networks: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8
  },
  networkButton: {
    borderWidth: 1,
    borderColor: "#34435D",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8
  },
  networkSelected: {
    backgroundColor: "#168F83",
    borderColor: "#48D6C6"
  },
  networkText: {
    color: "#AAB5C8",
    fontSize: 12
  },
  networkTextSelected: {
    color: "#FFFFFF",
    fontWeight: "bold"
  },
  addButton: {
    backgroundColor: "#168F83",
    padding: 14,
    borderRadius: 9,
    alignItems: "center",
    marginTop: 18
  },
  addText: {
    color: "#FFFFFF",
    fontWeight: "bold"
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 12
  },
  walletCard: {
    backgroundColor: "#151F34",
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  walletInfo: {
    flex: 1,
    paddingRight: 10
  },
  walletName: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16
  },
  networkName: {
    color: "#48D6C6",
    marginTop: 4
  },
  address: {
    color: "#AAB5C8",
    fontSize: 11,
    marginTop: 7
  },
  active: {
    color: "#48D6C6",
    fontSize: 11,
    marginTop: 7
  },
  deleteButton: {
    padding: 9,
    backgroundColor: "#49252D",
    borderRadius: 7
  },
  deleteText: {
    color: "#FF8D9A",
    fontSize: 12
  },
  empty: {
    color: "#8995A9",
    textAlign: "center",
    padding: 25
  },
  muted: {
    color: "#AAB5C8",
    marginTop: 12
  },
  footer: {
    color: "#77859B",
    fontSize: 10,
    textAlign: "center",
    paddingVertical: 12
  }
});
