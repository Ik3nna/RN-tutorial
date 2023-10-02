import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './home-navigator';
import { HOME, LOGIN, SETTINGS } from '../constants/routeName';
import { View, Text, Image, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import Container from '../components/common/container';

// images
import logo from "../assets/images/logo.png"

const Drawer = createDrawerNavigator();

const NavItems = ({ navigation }) => {
  const menuItems = [
    {icon:<Text>T</Text>, name:"Settings", onPress:()=>{navigation.navigate(SETTINGS)}},
    {icon:<Text>T</Text>, name:"Logout", onPress:()=>{}}
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