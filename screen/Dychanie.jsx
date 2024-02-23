
import * as React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView, FlatList, StyleSheet} from 'react-native';
import AppButton from '../components/AppButton';
import BottomNav from '../components/BottomNav';

const Dychanie = ({navigation}) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style = { styles.container } >
        <View style= { styles.logoContainer }>
          <View style={{paddingBottom:0 }}>
            <FlatList
              data={[
                { key: 'Zastaviť veľké krvácanie ', number: 1 },
                { key: 'Zistiť , či osoba reaguje na oslovenie, zatrasenie ' , number: 2},
                { key: 'Zistenie dýchania:', number: 3 },
                { key: 'Otočiť osobu na chrbát', number: 4 },
                { key: 'Zakloňte hlavu tlakom na čelo a bradu - počúvajte dýchanie ( cítenie jemného prúdu na líci)' , number: 5},
                { key: 'Ak osoba DÝCHA, uložiť do stabilizovanej polohy' , number: 6},
                { key: 'POZOR! Do stabilizovanej polohy neukladať pri bezdedomí po úrazoch', number: 7 },
                { key: 'Ak osoba NEDÝCHA, začneme s resuscitáciou' , number: 8},
                { key: 'Kontaktovať rýchlu zdravotnú službu' , number: 9},
                { key: 'button' },
            ]}
              renderItem={({ item }) => {
                if (item.key === 'button') {
                  return (
                    <AppButton title="Resuscitácia"  backgroundColor="#44a083"  onPress={() =>
                      navigation.navigate("ZD - Resuscitácia")} />
                  )
                }

                return (
                  <AppButton title={item.key} icon={item.number} iconBg="#c3eadd" /*stvorce v kt su cisla na podstr.*/style={{fontSize: 15, fontWeight: 'regular'}} uppercase={false} borderBottom />
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

export default Dychanie;
