// WeatherWidget.js
import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import moment from "moment";
import { BlurView } from "expo-blur";

const data = [
  { daysFromNow: 0, high: 25, low: 18, condition: "Partly Cloudy" },
  { daysFromNow: 1, high: 20, low: 15, condition: "Light Rain" },
  { daysFromNow: 2, high: 28, low: 21, condition: "Sunny" },
  { daysFromNow: 3, high: 22, low: 17, condition: "Cloudy" },
  { daysFromNow: 4, high: 21, low: 14, condition: "Showers" },
  { daysFromNow: 5, high: 26, low: 18, condition: "Clear" },
  { daysFromNow: 6, high: 19, low: 12, condition: "Thunderstorms" },
];

const WeatherForecast = () => {
  return (
    <View style={styles.container}>
      <BlurView intensity={60} style={StyleSheet.absoluteFill} />
      <FlatList
        data={data}
        style={{ flexGrow: 0 }}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.day}>
              {moment().add(item.daysFromNow, "days").format("dddd")}
            </Text>

            <View style={styles.temperatureContainer}>
              <Text style={styles.temperature}>{item.low}°</Text>
              <Text style={styles.temperatureSeparator}> | </Text>
              <Text style={styles.temperature}>{item.high}°</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  item: {
    padding: 10,
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  day: {
    fontSize: 18,

    color: "white",
  },
  temperature: {
    fontSize: 24,

    color: "white",
    width: 50,
    textAlign: "center",
  },
  temperatureContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  temperatureSeparator: {
    fontSize: 18,
    color: "white",
  },
});

export default WeatherForecast;
