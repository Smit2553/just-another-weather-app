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
  return <Weather city="London" />;
};

export default App;
