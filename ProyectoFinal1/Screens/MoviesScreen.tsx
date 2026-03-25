import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function MoviesScreen() {
  const email = useSelector((state: RootState) => state.auth.email);

  return (
    <View>
      <Text>Movies Screen</Text>
      <Text>Usuario: {email}</Text>
    </View>
  );
}