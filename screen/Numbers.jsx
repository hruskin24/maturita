import React from "react";
import { View, StyleSheet, Linking, Dimensions  } from "react-native";
import AppButton from "../components/AppButton";

const Home = ({navigation}) => {

  const dialCall = (type = 'zachranar') => {
 
    let phoneNumber = '';

    switch (type) {
      case 'zachranar':
        phoneNumber = Platform.OS === 'android' ? 'tel:155155' : 'telprompt:155155';
        break;
      case 'linka':
        phoneNumber = Platform.OS === 'android' ? 'tel:112112' : 'telprompt:112112';
        break;
      case 'Ustav':
        phoneNumber = Platform.OS === 'android' ? 'tel:+421 911 166 0666' : 'telprompt:+421 911 166 0666';
        break;
    
      default:
        break;
    }
 
    Linking.openURL(phoneNumber);
  };
  
  const height = (Dimensions.get('screen').height - 120) / 3

  return (
    
    <View style={styles.screenContainer}>
      <AppButton title="Tiesňová linka" height={height} backgroundColor="#ff6e6e" onPress={() => dialCall('linka')} />
      <AppButton title="Záchranná služba" height={height} backgroundColor="#df4d49" onPress={() => dialCall()} /> 
      <AppButton title="Národný toxikologický ústav" height={height} backgroundColor="#be2c23" onPress={() => dialCall("Ustav")} /> 
    </View>

  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 0,
    borderRadius: 20,
  },
});

export default Home;
