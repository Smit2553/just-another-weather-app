import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const OWM_API_KEY = process.env.OWM_API_KEY;

const API_URL = "https://api.openweathermap.org/data/2.5/weather";

const Weather = ({ city }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.city}>Test</Text>
      <Text style={styles.temperature}>10</Text>
      <Text style={styles.description}>Weather</Text>
      <Image
        style={styles.icon}
        source={{
          uri: `https://openweathermap.org/img/wn/01n.png`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  city: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  temperature: {
    fontSize: 18,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  icon: {
    width: 50,
    height: 50,
  },
});

export default Weather;
