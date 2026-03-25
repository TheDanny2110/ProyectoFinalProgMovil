import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { logout } from "../store/authSlice";
import { Button } from "react-native";

export default function LibraryScreen() {
  const dispatch = useDispatch();
  const email = useSelector((state: RootState) => state.auth.email);

  return (
    <View>
      <Text>Library Screen</Text>
      <Text>Usuario: {email}</Text>

      <Button title="Cerrar sesión" onPress={() => dispatch(logout())} />
    </View>
  );
}