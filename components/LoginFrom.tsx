import Student from "@/models/student";
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const DUMMY_PASSWORD = "12345";

const LoginScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [field, setField] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInStudent, setLoggedInStudent] = useState<Student | null>(null);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (password === DUMMY_PASSWORD) {
      const student = new Student(firstName, lastName, dateOfBirth, field);
      setLoggedInStudent(student);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };
  const handleBack = () => {
    setLoggedInStudent(null);
  };

  return (
    <View style={styles.container}>
      {loggedInStudent ? (
        <View>
          <Text style={styles.header}>Student Information</Text>
          <Text>Full Name: {loggedInStudent.getFullName()}</Text>
          <Text>Date of Birth: {loggedInStudent.dateOfBirth}</Text>
          <Text>Field of Study: {loggedInStudent.field}</Text>
          <Button title="Back" onPress={handleBack} />
        </View>
      ) : (
        <View>
          <Text style={styles.header}>Login Form</Text>
          <TextInput
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
            style={styles.input}
          />
          <TextInput
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
            style={styles.input}
          />
          <TextInput
            placeholder="Date of Birth"
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
            style={styles.input}
          />
          <TextInput
            placeholder="Field of Study"
            value={field}
            onChangeText={setField}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          <Button title="Login" onPress={handleLogin} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  errorText: {
    color: "red",
  },
});

export default LoginScreen;
