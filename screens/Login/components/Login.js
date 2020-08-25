import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { StatusBar } from "expo-status-bar";

const loginValidation = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required(),
});

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [appLoadStatus, setappLoadStatus] = useState(false);

  function loginChecking(a, b) {
    if (a === "a@yahoo.com" && b === "123") {
      console.log("You are in");
    }
  }

  return (
    <View style={styles.container}>
      {appLoadStatus ? (
        <View style={[styles.container, { marginBottom: 20 }]}>
          <StatusBar barStyle="light-content" />
          <ActivityIndicator size="large" />
        </View>
      ) : null}
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginValidation}
        onSubmit={(values, actions) => {
          Keyboard.dismiss();
          setappLoadStatus(true);
          setTimeout(() => {
            loginChecking(values.email, values.password);
            actions.resetForm();
            setappLoadStatus(false);
          }, 2000);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.Input}
              placeholder="Enter your email"
              onChangeText={props.handleChange("email")}
              onBlur={props.handleBlur("email")}
              value={props.values.email}
            />

            <Text style={styles.errorText}>
              {props.touched.email && props.errors.email}
            </Text>

            <TextInput
              style={styles.Input}
              placeholder="Enter your password"
              onChangeText={props.handleChange("password")}
              onBlur={props.handleBlur("password")}
              value={props.values.password}
              secureTextEntry
            />

            <Text style={styles.errorText}>
              {props.touched.password && props.errors.password}
            </Text>

            <TouchableOpacity
              style={styles.buttonSubmit}
              onPress={props.handleSubmit}
            >
              <Text>Submit</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  Input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  buttonSubmit: {
    backgroundColor: "orange",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 20,
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    paddingVertical: 0,
    marginBottom: 5,
    marginTop: 2,
  },
});

export default Login;
