import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './home-navigator';
import { HOME, LOGIN, SETTINGS } from '../constants/routeName';
import { View, Text, Image, SafeAreaView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Container from '../components/common/container';
import Icon from '../components/common/icon';

// images
import logo from "../assets/images/logo.png"
import { useGlobalContext } from '../context/provider';

const Drawer = createDrawerNavigator();

const NavItems = ({ navigation }) => {
  const { setIsLoggedIn } = useGlobalContext();

  const handleLogout = ()=> {
    navigation.toggleDrawer();
    Alert.alert("Logout", "Are you sure you want to logout?",[
      {
        text: "Cancel",
        onPress: ()=>{}
      },
      {
        text: "Ok",
        onPress: ()=>{setIsLoggedIn(false)}
      }
    ])
  }

  const menuItems = [
    {icon:<Icon type="fontisto" name="player-settings" size={17} color="black" />, name:"Settings", onPress:()=>{navigation.navigate(SETTINGS)}},
    {icon:<Icon type="mi" name="logout" size={17} color="black" />, name:"Logout", onPress: handleLogout}
  ]

  return (
    <SafeAreaView>
      <Container>
        <Image style={styles.img} source={logo} alt="logo" />

        <View style={{ paddingHorizontal: 70 }}>
          {menuItems.map((item, index)=>
            <TouchableOpacity key={index} style={styles.menuItems} onPress={item.onPress}>
              {item.icon}

              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
          )}
        </View>
      </Container>
    </SafeAreaView>
  )
};

const getDrawerContent = (navigation) => {
  return <NavItems navigation={navigation} />
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator 
      drawerContent={({ navigation })=>getDrawerContent(navigation)}
      screenOptions={{
        headerShown: false,
        drawerType: "slide",
      }}
    >
      <Drawer.Screen name={HOME} component={HomeNavigator} />
    </Drawer.Navigator>
  );
}


const styles = StyleSheet.create({
  img: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 50,
  },
  menuItems: {
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 17,
    paddingVertical: 7,
    paddingLeft: 20
  }
})