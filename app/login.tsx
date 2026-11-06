
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ActivityIndicator,
  Alert
} from "react-native";
import { useRouter } from "expo-router";
import { loginUser, registerUser } from "../services/auth";

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleAuth() {
    if (!email.trim() || !password) {
      Alert.alert("Perhatian", "Email dan password wajib diisi.");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Perhatian", "Password minimal 6 karakter.");
      return;
    }

    try {
      setLoading(true);

      const result = isRegister
        ? await registerUser(email.trim(), password)
        : await loginUser(email.trim(), password);

      if (result.error) {
        throw result.error;
      }

      if (isRegister && !result.data.session) {
        Alert.alert(
          "Pendaftaran berhasil",
          "Periksa email untuk konfirmasi akun, lalu login."
        );
        setIsRegister(false);
        return;
      }

      router.replace("/wallets");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Terjadi kesalahan.";

      Alert.alert("Gagal", message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>TX WALLET TRACKER</Text>
      <Text style={styles.heading}>
        {isRegister ? "Buat Akun" : "Selamat Datang"}
      </Text>
      <Text style={styles.subtitle}>
        {isRegister
          ? "Daftar untuk menyimpan wallet secara online."
          : "Login untuk mengakses wallet yang tersimpan."}
      </Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="nama@email.com"
        placeholderTextColor="#777"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Minimal 6 karakter"
        placeholderTextColor="#777"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Pressable
        style={styles.button}
        onPress={handleAuth}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>
            {isRegister ? "Daftar Sekarang" : "Login"}
          </Text>
        )}
      </Pressable>

      <Pressable
        onPress={() => setIsRegister(!isRegister)}
        style={styles.switchButton}
      >
        <Text style={styles.switchText}>
          {isRegister
            ? "Sudah punya akun? Login"
            : "Belum punya akun? Daftar"}
        </Text>
      </Pressable>

      <Text style={styles.notice}>
        TX Wallet Tracker tidak pernah meminta seed phrase
        atau private key wallet.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1020",
    padding: 24,
    justifyContent: "center"
  },
  logo: {
    color: "#48D6C6",
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 2,
    marginBottom: 32
  },
  heading: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold"
  },
  subtitle: {
    color: "#9BA5B8",
    marginTop: 8,
    marginBottom: 28
  },
  label: {
    color: "#FFFFFF",
    marginBottom: 8,
    marginTop: 12
  },
  input: {
    backgroundColor: "#192238",
    borderColor: "#2B3852",
    borderWidth: 1,
    borderRadius: 10,
    padding: 14,
    color: "#FFFFFF"
  },
  button: {
    backgroundColor: "#168F83",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 26
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold"
  },
  switchButton: {
    alignItems: "center",
    padding: 18
  },
  switchText: {
    color: "#48D6C6"
  },
  notice: {
    color: "#78859B",
    textAlign: "center",
    fontSize: 12,
    marginTop: 24
  }
});
