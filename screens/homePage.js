import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Weather from "../components/weather.js";
import { LinearGradient } from "expo-linear-gradient";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather</Text>
      <Weather city="London" />
      <Weather city="London" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 50,
    marginLeft: 15,
    color: "white",
  },
});

export default App;
