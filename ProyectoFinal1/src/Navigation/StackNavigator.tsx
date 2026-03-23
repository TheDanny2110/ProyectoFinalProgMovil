import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Puzzle from "../Puzzle";
import LoginScreen from "../../Screens/LoginScreen";
import TabNavigator from "../Navigation/TabNavigator";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Puzzle" component={Puzzle} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={TabNavigator} />
    </Stack.Navigator>
  );
}