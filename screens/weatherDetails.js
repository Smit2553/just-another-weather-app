// WeatherDetails.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import WeatherForecast from "../components/weatherForecast";

const WeatherDetails = () => {
  return (
    <LinearGradient
      colors={["#020024", "#090979", "#00d4ff"]}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.city}>London</Text>
        <Text style={styles.temperature}>10°</Text>
        <Text style={styles.description}>Clear Skies</Text>
        <Text style={styles.sub_temperature}>High: 10° Low: 5°</Text>
        <WeatherForecast />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 15,
  },
  content: {
    flex: 1,
    alignItems: "center",
  },
  city: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.50)",
    textShadowRadius: 5,
    marginTop: 50,
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.50)",
    textShadowRadius: 5,
  },
  temperature: {
    fontSize: 100,
    textShadowColor: "rgba(0, 0, 0, 0.50)",
    textShadowRadius: 5,
    color: "white",
  },
  sub_temperature: {
    fontSize: 18,
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.50)",
    textShadowRadius: 5,
  },
});

export default WeatherDetails;
