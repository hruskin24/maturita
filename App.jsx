import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import colors from "./colors";
import Detail from "./screen/Detail";
import Numbers from "./screen/Numbers";
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text, View,StyleSheet, Alert, Button } from "react-native";

import { useNavigation } from '@react-navigation/native'




TouchableOpacity.defaultProps = { activeOpacity: 0.8 }; //active capacity

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

//type Props = <NavigationProp<>; 2:52:00
//{route, navigation}: Props - bolo v zltej zatvorke pri Hom

/*const Home = ({navigation}) => {
  return (
    <View style={styles.screenContainer}>

    <Link to={'${navigation.url}/Pomoc'}>
      <Text>POMOC</Text>
    </Link>

    <AppButton title="Prvá Pomoc" size="sm" onPress={() => navigation.navigate('Pomoc', { name: 'Pomoc' })}/>
    <AppButton title="Krvácanie z nosa" size="sm"onPress={() => navigation.navigate('Krvacanie', { name: 'Krvacanie' })}/>
    <AppButton title="Otrava liekmi" size="sm" />
    <AppButton title=" Pneumothorax" size="sm"  />
    <AppButton title="este daco" size="sm" />
    <AppButton title="tu by som este daco dal" size="sm"  />
    <AppButton title="daco o mne a kde bola appka vyrobena atd (mozno)" size="sm"/>

  </View>
  );
};*/

//const handlePress = () => {};


/*const styles = StyleSheet.create({
    screenContainer: {
      marginTop: 200
      
      
      
    }
  });
*/


  //export default Home;


  



// NAVIGATOR


//import Pomoc from "./screen/Pomoc";
import Krvacanie from "./screen/Krvacanie";
import Home from "./screen/Home";
import { Switch } from "react-native-gesture-handler";
import Otrava from "./screen/Otrava";
import Pneumothorax from "./screen/Pneumothorax";
import Porazka from "./screen/Dychanie";
import Infarkt from "./screen/Infarkt";
import Informacie from "./screen/Informacie";

import Lieky from "./screen/Lieky";
import Chemikalie from "./screen/Chemikalie";
import Alkohol from "./screen/Alkohol";
import Linka from "./screen/Linka";
import Zachranar from "./screen/Zachranar";
import Dychanie from "./screen/Dychanie";
import Ustav from "./screen/Ustav";
import Resuscitaciad from "./screen/Resuscitaciad";
import Resusdi from "./screen/Resusdi";
import Resuscitacia from "./screen/Resuscitacia";
import Resuspneu from "./screen/Resuspneu";
import Resuspneudosp from "./screen/Resuspneudosp";
import Resuspneudieta from "./screen/Resuspneudieta";







const AppTab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Krvacanie" component={Krvacanie} />
        <Stack.Screen name="Krvacanie" component={Pneumothorax} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//componennt - nazov file
//name - v Home - navigation.navigate('Pomoc')
const App = () => {   //arrow function - novy sposob zapisovania funkciee
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        
        <Stack.Screen name="Domov" component={Home} /> 
        <Stack.Screen name="Krvácanie z nosa" component={Krvacanie} options={{headerTitleStyle: {color: '#fff',}, headerStyle: {backgroundColor: '#efcf5d',},}}/>
        <Stack.Screen name="Otrava" component={Otrava} options={{headerTitleStyle: {color: '#fff',}, headerStyle: {backgroundColor: '#ff8764',},}} />
        <Stack.Screen name="Poranenie hrudníka" component={Pneumothorax} options={{headerTitleStyle: {color: '#fff',}, headerStyle: {backgroundColor: '#dd8599',},}}/>
        <Stack.Screen name="Zástava dýchania" component={Dychanie} options={{headerTitleStyle: {color: '#fff',}, headerStyle: {backgroundColor: '#70d3bb',},}}/>
        <Stack.Screen name="Infarkt srdca" component={Infarkt}  options={{headerTitleStyle: {color: '#fff',}, headerStyle: {backgroundColor: '#88a0d2',},}}/>
        <Stack.Screen name="Telefónne čísla" component={Numbers} />
        <Stack.Screen name="Informácie" component={Informacie}  />
        <Stack.Screen name="Lieky" component={Lieky} options={{headerTitleStyle: {color: '#fff',}, headerStyle: {backgroundColor: '#ff8764',},}} />
        <Stack.Screen name="Chemikálie" component={Chemikalie} options={{headerTitleStyle: {color: '#fff',}, headerStyle: {backgroundColor: '#e67860',},}} />
        <Stack.Screen name="Alkohol" component={Alkohol} options={{headerTitleStyle: {color: '#fff',}, headerStyle: {backgroundColor: '#c45f50',},}} />
        <Stack.Screen name="Tiesňová linka" component={Linka} options={{headerTitleStyle: {color: '#fff',}, headerStyle: {backgroundColor: '#d88079',},}} />
        <Stack.Screen name="Záchranná služba" component={Zachranar} options={{headerTitleStyle: {color: '#fff',}, headerStyle: {backgroundColor: "#c9493d",},}} />
        <Stack.Screen name="Národný toxikologický ústav" component={Ustav} options={{headerTitleStyle: {color: '#fff',}, headerStyle: {backgroundColor: '#9e3328',},}} />
        <Stack.Screen name="ZD - Resuscitácia" component={Resuscitacia} options={{headerTitleStyle: {color: '#fff',}, headerStyle: {backgroundColor: "#44a083",},}} />
        <Stack.Screen name="ZD - Dospelý" component={Resuscitaciad} options={{headerTitleStyle: {color: '#fff',}, headerStyle: {backgroundColor: '#44a083',},}} />
        <Stack.Screen name="ZD - Dieťa" component={Resusdi} options={{headerTitleStyle: {color: '#fff',}, headerStyle: {backgroundColor: '#44a083',},}} />
        <Stack.Screen name="PH - Resuscitácia" component={Resuspneu} options={{headerTitleStyle: {color: '#fff',}, headerStyle: {backgroundColor: "#dd8599",},}} />
        <Stack.Screen name="PH - Dospelý" component={Resuspneudosp} options={{headerTitleStyle: {color: '#fff',}, headerStyle: {backgroundColor: '#dd8599',},}} />
        <Stack.Screen name="PH - Dieťa" component={Resuspneudieta} options={{headerTitleStyle: {color: '#fff',}, headerStyle: {backgroundColor: '#dd8599',},}} />
      </Stack.Navigator>
    </NavigationContainer>

    /*<NavigationContainer>
      <AppTab.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.black,
          tabBarInactiveTintColor: colors.inactivecolor
        }}>
        <AppTab.Screen 
        name = "Domov" 
        component = {Home} 
        options={{
          headerTitle: "Zoznam Zranení",
          tabBarLabel: "Domov",
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
    </NavigationContainer>*/

  
  );
};


export default App;