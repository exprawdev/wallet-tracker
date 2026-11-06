
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from "react-native";

const candles = [
  { open: 42, close: 65, high: 78, low: 30 },
  { open: 65, close: 48, high: 82, low: 35 },
  { open: 48, close: 72, high: 86, low: 38 },
  { open: 72, close: 80, high: 91, low: 55 },
  { open: 80, close: 58, high: 95, low: 42 },
  { open: 58, close: 35, high: 73, low: 22 },
  { open: 35, close: 52, high: 67, low: 20 },
  { open: 52, close: 76, high: 88, low: 40 },
  { open: 76, close: 69, high: 92, low: 55 },
  { open: 69, close: 89, high: 98, low: 57 },
  { open: 89, close: 61, high: 100, low: 48 },
  { open: 61, close: 83, high: 94, low: 44 }
];

const indicators = ["EMA", "RSI", "MACD", "BOLLINGER"];

export default function ChartScreen() {
  const [period, setPeriod] = useState("24H");
  const [activeIndicators, setActiveIndicators] = useState<string[]>(["EMA"]);

  function toggleIndicator(item: string) {
    setActiveIndicators((current) =>
      current.includes(item)
        ? current.filter((value) => value !== item)
        : [...current, item]
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>LIVE MARKET CHART</Text>
      <Text style={styles.subtitle}>
        TX WALLET TRACKER · DEMO DATA
      </Text>

      <View style={styles.priceCard}>
        <Text style={styles.label}>ETHEREUM / USD</Text>
        <Text style={styles.price}>$3,420.50</Text>
        <Text style={styles.change}>+2.45% · DEMO VALUE</Text>
      </View>

      <View style={styles.periods}>
        {["1H", "4H", "24H", "7D", "30D"].map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => setPeriod(item)}
            style={[
              styles.periodButton,
              period === item && styles.periodActive
            ]}
          >
            <Text style={[
              styles.periodText,
              period === item && styles.periodTextActive
            ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.chartCard}>
        <View style={styles.chartHeader}>
          <Text style={styles.chartTitle}>CANDLESTICK</Text>
          <Text style={styles.demo}>SAMPLE</Text>
        </View>

        <View style={styles.chart}>
          <View style={styles.gridLine} />
          <View style={[styles.gridLine, { top: "25%" }]} />
          <View style={[styles.gridLine, { top: "50%" }]} />
          <View style={[styles.gridLine, { top: "75%" }]} />

          <View style={styles.candles}>
            {candles.map((candle, index) => {
              const green = candle.close >= candle.open;
              const color = green ? "#16C784" : "#EA3943";
              const top = 100 - Math.max(candle.open, candle.close);
              const bodyHeight = Math.max(
                Math.abs(candle.close - candle.open), 5
              );

              return (
                <View key={index} style={styles.candleSlot}>
                  <View
                    style={{
                      position: "absolute",
                      height: `${candle.high - candle.low}%`,
                      bottom: `${candle.low}%`,
                      width: 2,
                      backgroundColor: color
                    }}
                  />
                  <View
                    style={{
                      position: "absolute",
                      top: `${top}%`,
                      height: `${bodyHeight}%`,
                      width: 9,
                      backgroundColor: color,
                      borderRadius: 2
                    }}
                  />
                </View>
              );
            })}
          </View>
        </View>

        <View style={styles.volumeTitle}>
          <Text style={styles.label}>VOLUME</Text>
          <Text style={styles.label}>SAMPLE DATA</Text>
        </View>

        <View style={styles.volumeBars}>
          {[35, 65, 42, 78, 55, 30, 60, 85, 48, 72, 40, 68].map(
            (height, index) => (
              <View
                key={index}
                style={[
                  styles.volumeBar,
                  {
                    height: `${height}%`,
                    backgroundColor:
                      index % 2 === 0 ? "#16C784" : "#EA3943"
                  }
                ]}
              />
            )
          )}
        </View>
      </View>

      <Text style={styles.sectionTitle}>TECHNICAL INDICATORS</Text>

      <View style={styles.indicatorList}>
        {indicators.map((item) => {
          const active = activeIndicators.includes(item);
          return (
            <TouchableOpacity
              key={item}
              onPress={() => toggleIndicator(item)}
              style={[
                styles.indicator,
                active && styles.indicatorActive
              ]}
            >
              <Text style={styles.indicatorText}>
                {active ? "✓ " : "+ "}{item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.info}>
        <Text style={styles.infoText}>
          Chart ini masih menggunakan data contoh. Koneksi
          harga real-time, candlestick asli, indikator teknikal,
          dan grafik seluruh wallet akan diaktifkan setelah
          integrasi penyedia data pasar dan blockchain.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080D18",
    padding: 18
  },
  title: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "900",
    marginTop: 45
  },
  subtitle: {
    color: "#75849C",
    fontSize: 10,
    marginTop: 7,
    marginBottom: 22
  },
  priceCard: {
    backgroundColor: "#14213A",
    padding: 20,
    borderRadius: 15
  },
  label: {
    color: "#8B9BB4",
    fontSize: 10,
    fontWeight: "bold"
  },
  price: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10
  },
  change: {
    color: "#16C784",
    fontSize: 11,
    marginTop: 7
  },
  periods: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 18
  },
  periodButton: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#111B2D"
  },
  periodActive: {
    backgroundColor: "#145D4B"
  },
  periodText: {
    color: "#8B9BB4",
    fontSize: 11
  },
  periodTextActive: {
    color: "#FFFFFF",
    fontWeight: "bold"
  },
  chartCard: {
    backgroundColor: "#111B2D",
    padding: 15,
    borderRadius: 14
  },
  chartHeader: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  chartTitle: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 12
  },
  demo: {
    color: "#E6B85C",
    fontSize: 10
  },
  chart: {
    height: 210,
    marginTop: 20,
    position: "relative",
    overflow: "hidden"
  },
  gridLine: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    borderTopWidth: 1,
    borderColor: "#26344A"
  },
  candles: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  candleSlot: {
    flex: 1,
    position: "relative",
    alignItems: "center"
  },
  volumeTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18
  },
  volumeBars: {
    height: 55,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
    marginTop: 10
  },
  volumeBar: {
    width: "5%",
    borderRadius: 2
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 14
  },
  indicatorList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 9
  },
  indicator: {
    backgroundColor: "#111B2D",
    padding: 12,
    borderRadius: 8
  },
  indicatorActive: {
    backgroundColor: "#145D4B"
  },
  indicatorText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "bold"
  },
  info: {
    backgroundColor: "#30291B",
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 30
  },
  infoText: {
    color: "#E6B85C",
    fontSize: 11,
    lineHeight: 18
  }
});
