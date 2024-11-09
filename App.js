import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "./screens/Auth";
import { NavigationContainer } from "@react-navigation/native";
import NewUser from "./screens/NewUser";
import Acceuil from "./screens/Acceuil";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: false }}>
        <stack.Screen name="Auth" component={Auth} />
        <stack.Screen
          name="NewUser"
          component={NewUser}
          screenOptions={{ headerShown: false }}
        />
        <stack.Screen name="Acceuil" component={Acceuil} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
