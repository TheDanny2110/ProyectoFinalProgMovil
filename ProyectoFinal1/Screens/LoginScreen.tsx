import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";


export default function LoginScreen() {
  const navigation = useNavigation<any>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email.includes("@") || password.length < 4) {
      alert("Datos inválidos");
      return;
    }

    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      <Button title="Ingresar" onPress={handleLogin} />
    </View>
  );
}



const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});