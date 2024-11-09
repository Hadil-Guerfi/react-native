import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  BackHandler,
} from "react-native";
import { Button } from "react-native-paper";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const refInput2 = useRef();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <ImageBackground
        style={styles.background}
        source={require("../assets/background.jpg")}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />

        <Text style={styles.title}>Login</Text>

        <TextInput
          onChangeText={(text) => {
            setEmail(text);
          }}
          onSubmitEditing={() => {
            refInput2.current.focus();
          }}
          placeholder="Email"
          style={styles.input}
          keyboardType="email-pad"
          placeholderTextColor="#29138660"
        />

        <TextInput
          onChangeText={(text) => {
            setPassword(text);
          }}
          placeholder="Password"
          style={styles.input}
          secureTextEntry={true}
          placeholderTextColor="#888"
          ref={refInput2}
        />

        <Button
          style={styles.button}
          onPress={() => {
            alert("signin" + email + "  " + password);
          }}>
          <Text style={styles.buttonText}>Login</Text>
        </Button>

        <Button
          style={styles.button}
          onPress={() => {
            BackHandler.exitApp();
          }}>
          <Text style={styles.buttonText}>Exit</Text>
        </Button>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  logo: {
    width: 90,
    height: 90,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#075E54",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#333",
    borderColor: "#ddd",
    borderRadius: 30,
  },
  button: {
    width: "50%",
    padding: 8,
    backgroundColor: "#25D366",
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
