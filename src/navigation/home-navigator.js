import { createStackNavigator } from '@react-navigation/stack';
import { CONTACT_LIST, CONTACT_DETAIL, CREATE_CONTACT, SETTINGS } from '../constants/routeName';
import Contacts from "../screens/contacts"
import ContactDetail from "../screens/contactDetail";
import CreateContact from "../screens/createContact";
import Settings from "../screens/settings";

const Stack = createStackNavigator();

export default function HomeNavigator () {
  return (
    <Stack.Navigator initialRouteName={CONTACT_LIST}>
      <Stack.Screen name={CONTACT_LIST} component={Contacts} />
      <Stack.Screen name={CONTACT_DETAIL} component={ContactDetail} />
      <Stack.Screen name={CREATE_CONTACT} component={CreateContact} />
      <Stack.Screen name={SETTINGS} component={Settings} />
    </Stack.Navigator>
  );
}