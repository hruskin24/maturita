import * as React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView, FlatList, StyleSheet} from 'react-native';
import BottomNav from '../components/BottomNav';
import AppButton from '../components/AppButton';
const Pneumothorax = ({navigation}) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style = { styles.container } >
        <View style= { styles.logoContainer }>
          <View style={{  paddingBottom:0}}>
            <FlatList

              data={[

                { key: 'PRÍZNAKY'},
                { key: 'Ostrá bodavá bolesť', number: 1},
                { key: 'Ťažké dýchanie - nedostatok vzduchu', number: 2},
                { key: 'Zmodranie pier', number: 3},
                { key: 'Pocit úzkosti', number: 4},

                { key: "PRVÁ POMOC"},
                { key: 'Privolať rýchlu zdravotnú službu', number: 1 },
                { key: 'Cudzí predmet nevyťahovať', number: 2},
                { key: 'Postihnutého dať do polosedu' , number: 3},
                { key: 'Sprístupniť celú ranu', number: 4},
                { key: 'Okamžité zakrytie rany dlaňou' , number: 5},
                { key: 'Priložiť sterilný neprievzdušný materál (PVC/mikrotén)' , number: 6},
                { key: 'Z troch strán oblepiť náplasťou', number: 7 },
                { key: 'PACIENTA NENAKLÁŇAŤ', number: 8},
                { key: 'Pri ťažkostiach s dýchaním nakloníme na poranenú stranu', number: 9 },
                { key: 'Pri zlyhávaní vitálnych funkcií začať resuscitáciu ' , number: 10},
                { key: 'button' },
              ]}
              renderItem={({ item }) => {
                if (item.key === 'button') {
                  return (
                    <AppButton title="Resuscitácia"  backgroundColor="#915064"/*farba buttonu v pneu dole*/  onPress={() =>
                      navigation.navigate("PH - Resuscitácia")} />
                  )
                }
                return (
                  <AppButton title={item.key} icon={item.number} iconBg="#e8c1cb" /*stvorce v kt su cisla na podstr.*/style={{fontSize: 15, fontWeight: 'regular'}} uppercase={false} borderBottom />
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
      backgroundColor: "#e7a4b3" // farba pozadia
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
export default Pneumothorax;