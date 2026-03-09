import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { COLORS } from "./src/Constants";

import Puzzle from "./src/Puzzle";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Puzzle />
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;