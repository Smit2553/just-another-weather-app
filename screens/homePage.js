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

const App = () => {
  return (
    <View style={styles.container}>
      <Weather city="London" />
      <Weather city="London" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
