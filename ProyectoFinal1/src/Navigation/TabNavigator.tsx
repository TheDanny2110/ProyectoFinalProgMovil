import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ProfileScreen from "../../Screens/ProfileScreen";
import MoviesScreen from "../../Screens/MoviesScreen";
import LibraryScreen from "../../Screens/LibraryScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Perfil" component={ProfileScreen} />
      <Tab.Screen name="Peliculas" component={MoviesScreen} />
      <Tab.Screen name="Biblioteca" component={LibraryScreen} />
    </Tab.Navigator>
  );
}