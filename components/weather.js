import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const OWM_API_KEY = process.env.OWM_API_KEY;

const API_URL = "https://api.openweathermap.org/data/2.5/weather";

const Weather = ({ city }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Weather Details")}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.city}>Test</Text>
          <Text style={styles.temperature}>10°</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.description}>Weather</Text>
          <Text style={styles.sub_temperature}>H: 10° L: 5°</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    borderRadius: 10,
    padding: 15,
    margin: 10,
    backgroundColor: "lightblue",
  },
  textContainer: {
    flexDirection: "row", // Set the direction to row
    justifyContent: "space-between", // Align items with space between them
    marginBottom: 5,
  },
  city: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.50)",
    textShadowRadius: 5,
  },
  temperature: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "right",
    textShadowColor: "rgba(0, 0, 0, 0.50)",
    textShadowRadius: 5,
    color: "white",
  },
  sub_temperature: {
    fontSize: 18,
    textAlign: "right",
    textShadowColor: "rgba(0, 0, 0, 0.50)",
    textShadowRadius: 5,
    color: "white",
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.50)",
    textShadowRadius: 5,
  },
  icon: {
    width: 50,
    height: 50,
  },
});

export default Weather;
