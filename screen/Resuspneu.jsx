import React from "react";
import { View, StyleSheet, Dimensions  } from "react-native";
import { faPills, faVial, faWineBottle } from "@fortawesome/free-solid-svg-icons";
import AppButton from "../components/AppButton";
import BottomNav from "../components/BottomNav";

const Resuspneu = ({navigation}) => {

  const height = (Dimensions.get('screen').height - Dimensions.get('screen').width / 3 - 120) / 2
  
  return (
    <View style={styles.container}>
      <View style={styles.screenContainer}>
        <AppButton title="Dospelý" height={height} backgroundColor="#e8c1cb" onPress={() =>
          navigation.navigate('PH - Dospelý')
        } />
          <AppButton title="Dieťa" height={height} backgroundColor="#e7a4b3"  onPress={() =>
          navigation.navigate('PH - Dieťa') 
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
export default Resuspneu;
  

