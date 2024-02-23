
import * as React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView, FlatList, StyleSheet} from 'react-native';
import BottomNav from '../components/BottomNav';
import AppButton from '../components/AppButton';

const Resusdi = ({navigation}) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style = { styles.container } >
        <View style= { styles.logoContainer }>
          <View style={{paddingBottom:0 }}>
            <FlatList

              data={[
                { key: 'Uložiť osobu na tvrdú a rovnú podložku' , number: 1},
                { key: 'Začať s 5 záchrannými vdychmi' , number: 2},
                { key: 'Nahmatať miesto na hrudníku, uprostred hrudnej kosti', number: 3},
                { key: 'Stláčať hrudník s vystretými rukami v tempe 100krát za minútu, do hĺbky 1/3 hrudníka', number: 4 },
                { key: 'Nasledujú 2 vdychy - aby vzduch neunikal, zapchať nos (iba ak poznáme pacienta)' , number: 5},
                { key: 'Pomer stláčania hrudníka a dýchania je 15 : 2' , number: 6},
                { key: 'Kontaktovať rýchlu zdravotnú službu' , number: 7},
                { key: 'Postup opakovať do príchodu zachrannej služby' , number: 8},
                               
            ]}
              renderItem={({ item }) => {
                return (
                  <AppButton title={item.key} icon={item.number} iconBg="#c3eadd" style={{fontSize: 15, fontWeight: 'regular'}} uppercase={false} borderBottom />
                );
              }}
            />
            <BottomNav navigation={navigation} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#97e0cc"
  },
  logoContainer:{
      alignItems: "center",
  },
  logoText: {
      fontSize: 24,
      fontWeight: '600',
      color: 'white'
  },
  logoDescription:{
      fontSize: 15,
      fontWeight: '600',
      color: 'white'
  }
});

export default Resusdi;
