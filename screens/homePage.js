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
      <Text style={styles.title}>Weather Demo</Text>
      <View style={styles.searchContainer}>
        <TextInput style={styles.input} placeholder="Enter city" />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <Weather />
      <Weather />
      <Weather />
      <Weather />
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    marginTop: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "white",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    paddingLeft: 10,
  },
  searchButton: {
    padding: 10,
    backgroundColor: "#3498db",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default App;
