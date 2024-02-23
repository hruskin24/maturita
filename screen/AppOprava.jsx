/*import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import colors from "./colors";
import Detail from "./screen/Detail";
import Home from "./screen/Home";
import Numbers from "./screen/Numbers";
import { createStackNavigator } from '@react-navigation/stack';

/* const SecondScreen = () => { //tu budu zatial info ale potom tam dam asi porkacovanie akooo napr nieco naviac... ako Obycajne zranenia pre nastudovanie alebo hocčo čo mi napadne.
  return <View />;
  ;
};*/


/*
const AppTab = createBottomTabNavigator();

const ZraneniaStack = createNativeStackNavigator();

const ZraneniaNavigator = () => {
  return <ZraneniaStack.Navigator>
    <ZraneniaStack.Screen name = "Zoznam Zranení" component = {Home}/>
    <ZraneniaStack.Screen name = "Detail" component={Detail}/>
  </ZraneniaStack.Navigator>
}

const App = () => {   //arrow function - novy sposob zapisovania funkciee
  return (
    <NavigationContainer>
      <AppTab.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.black,
          tabBarInactiveTintColor: colors.inactivecolor
        }}>
        <AppTab.Screen 
        name = "Domov" 
        component = {ZraneniaNavigator} 
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name = "home" color={color} size = {size}/>
          ),
          //tabBarActiveTintColor: "black", /*tento riadok zmeni defaultnu farbu (modru) ktoro je od platformy defaultne definovana
                                            // toto iste sa da aj pre size ktory je tiez defaultny 
                                            // pridanie len pre jeden botton -> hore v appTab.Navigatore som to pridal rovno pre vaetky
        }}
        />
        <AppTab.Screen 
        name = "Numbers"
        component={Numbers} 
        options ={{
          headerTitle: "Telefónne čísla",
          tabBarLabel: "Telefónne čísla",
            tabBarIcon: ({color, size}) => (
              <Icon2 name = "info-outline" color = {color} size = {size}/> // moznost potom pridania vlasntej ikony ktoru si stiahneme => 01:35:00
              ),

          }}
          />
    </AppTab.Navigator>
    </NavigationContainer>
  );
};


export default App;*/