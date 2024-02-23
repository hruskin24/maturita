import React from "react";
import { View, StyleSheet, Dimensions  } from "react-native";
import { faPills, faVial, faWineBottle } from "@fortawesome/free-solid-svg-icons";
import AppButton from "../components/AppButton";
import BottomNav from "../components/BottomNav";

const Home = ({navigation}) => {

  const height = (Dimensions.get('screen').height - Dimensions.get('screen').width / 3 - 120) / 3
  
  return (
    <View style={styles.container}>
      <View style={styles.screenContainer}>
        <AppButton title="Lieky" height={height} backgroundColor="#ffa58c" iconBg="#ff8764" icon={faPills} onPress={() =>
          navigation.navigate('Lieky')
        } />
          <AppButton title="Chemikálie" height={height} backgroundColor="#ec9682" iconBg="#e67860" icon={faVial} onPress={() =>
          navigation.navigate('Chemikálie') 
        } />
          <AppButton title="Alkohol" height={height} backgroundColor="#d18273" iconBg="#c45f50" icon={faWineBottle} onPress={() =>
          navigation.navigate('Alkohol') 
        } />
      </View>
      <BottomNav navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
    padding: 0,
    paddingTop: 10,
    borderRadius: 20,
  },
});

export default Home;
  

