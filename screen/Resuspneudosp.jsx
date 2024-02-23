
import * as React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView, FlatList, StyleSheet} from 'react-native';
import BottomNav from '../components/BottomNav';
import AppButton from '../components/AppButton';

const Resuspneudosp = ({navigation}) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style = { styles.container } >
        <View style= { styles.logoContainer }>
          <View style={{paddingBottom:0 }}>
            <FlatList
              data={[
                { key: 'Uložiť osobu na tvrdú a rovnú podložku', number: 1 },
                { key: 'Nahmatať miesto na hrudníku, uprostred hrudnej kosti', number: 2 },
                { key: 'Stláčať hrudník s vystretými rukami v tempe 100-120krát za minútu, do hĺbky 1/3 hrudníka', number: 3 },
                { key: 'Nasledujú 2 vdychy - aby vzduch neunikal, zapchať nos (iba ak poznáme pacienta)', number: 4 },
                { key: 'Pomer stláčania hrudníka a dýchania je 30 : 2', number: 5 },
                { key: 'Kontaktovať rýchlu zdravotnú službu' , number: 6},
                { key: 'Postup opakovať do príchodu zachrannej služby', number: 7 },
                               
            ]}
              renderItem={({ item }) => {
                return (
<AppButton title={item.key} icon={item.number} iconBg="#e8c1cb" /*toto zmen*/style={{fontSize: 15, fontWeight: 'regular'}} uppercase={false} borderBottom />
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
      backgroundColor: "#e7a4b3"
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

export default Resuspneudosp;
