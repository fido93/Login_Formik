import React from "react";
import { View, StyleSheet } from "react-native";
import Login from "./components/Login";

function index(props) {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default index;
