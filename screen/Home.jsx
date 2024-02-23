import React from "react";
import { View, StyleSheet } from "react-native";
import { faDroplet, faSkullCrossbones, faBrain, faHeartCrack, faLungs, faBriefcaseMedical } from "@fortawesome/free-solid-svg-icons";
import AppButton from "../components/AppButton";

const Home = ({navigation}) => {

  return (
    <View style={styles.screenContainer}>
      <AppButton title="Krvácanie z nosa" backgroundColor="#f3da87" iconBg="#efcf5d" icon={faDroplet} onPress={() =>
        navigation.navigate('Krvácanie z nosa')
      } />
        <AppButton title="Otrava" backgroundColor="#ffa58c" iconBg="#ff8764" icon={faSkullCrossbones} onPress={() =>
        navigation.navigate('Otrava') 
      } />
        <AppButton title="Poranenie hrudníka" backgroundColor="#e7a4b3" iconBg="#dd8599" icon={faLungs} onPress={() =>
        navigation.navigate('Poranenie hrudníka') 
      } />
        <AppButton title=" Zástava dýchania" backgroundColor="#97e0cc" iconBg="#70d3bb" icon={faBriefcaseMedical} onPress={() =>
        navigation.navigate('Zástava dýchania') 
      } />
        <AppButton title="INFARKT SRDCA" backgroundColor="#a5b7dd" iconBg="#88a0d2" icon={faHeartCrack} onPress={() =>
        navigation.navigate('Infarkt srdca') 
      } />
          <AppButton title="Privolať Pomoc" backgroundColor="#da3c34" onPress={() =>
        navigation.navigate('Telefónne čísla') 
      } />
       
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
  