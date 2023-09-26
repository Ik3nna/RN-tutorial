import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './home-navigator';
import { HOME } from '../constants/routeName';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={HOME} component={HomeNavigator} />
    </Drawer.Navigator>
  );
}