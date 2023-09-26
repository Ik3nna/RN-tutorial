import { createStackNavigator } from '@react-navigation/stack';
import { LOGIN, REGISTER } from '../constants/routeName';
import Login from "../screens/login";
import Register from "../screens/register";

const Stack = createStackNavigator();

export default function AuthNavigator () {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={LOGIN} component={Login} />
      <Stack.Screen name={REGISTER} component={Register} />
    </Stack.Navigator>
  );
}