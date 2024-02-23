/*import React from "react";
import { TouchableOpacity, Text, View,StyleSheet, Alert } from "react-native";
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Pomoc from "./Pomoc"




TouchableOpacity.defaultProps = { activeOpacity: 0.8 }; //active capacity

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

//type Props = <NavigationProp<>; 2:52:00
//{route, navigation}: Props - bolo v zltej zatvorke pri Home
const Otravyhome = ({navigation}) => {
  return (
    <View style={styles.screenContainer}>
      <AppButton title="Lieky" size="sm" onPress={() =>
        navigation.navigate('Lieky') 
      } />
                
    </View>


  );
};



const styles = StyleSheet.create({
    screenContainer: {
      marginTop: 80,
      flex: 1,
      //justifyContent: 'center',
      padding: 10,
      
      
      
    },
    appButtonContainer: { //vsetko ohladom buttonu ako takeho
      elevation: 8,
      //backgroundColor: "#e8562a",
      backgroundColor: "#e32425",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal:20,
      marginVertical: 10,
      justifyContent: 'center'
  
    },
    appButtonText: { //text buttonu
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textAlign: "center",
      textTransform: "uppercase"
    }
  });



  export default Otravyhome;*/
  