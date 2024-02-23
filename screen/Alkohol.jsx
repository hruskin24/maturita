import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView, FlatList } from 'react-native';
import BottomNav from '../components/BottomNav';
import AppButton from '../components/AppButton';
const Alkohol = ({navigation}) => {

   return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style = { styles.container } >
          <View style= { styles.logoContainer }>
           <View style={{ paddingBottom: 0 }}>
          <FlatList

            data={[

              { key: 'AKO ROZPOZNAŤ OTRAVU ALKOHOLOM' },
              { key: 'Zápach po alkohole', number: 1 },
              { key: 'Nezrozumiteľná reč', number: 2 },
              { key: ' Slabá koordinácia pohybov' , number: 3},
              { key: 'Vracanie' , number: 4},
              { key: 'Pomalené dýchanie (menej, než 8 krát za minútu) s dlhými pauzami medzi nádychmi', number: 5 },
              { key: 'Spomalený tep' , number: 6},
              { key: 'Zblednutie alebo zmodranie pokožky' , number: 7},
              
              { key: 'PRVÁ POMOC:' },
              { key: 'Bezokladne kontaktovať záchrannú službu v prípade bezvedomia' , number: 1},
              { key: 'Nenechávať bez dohľadu', number: 2 },
              { key: 'Komunikácia, aby nedošlo k strate vedomia', number: 3 },
              { key: 'Nečakať, že sa z toho vyspí ', number: 4 },
              { key: 'Podávať iba čistú vodu', number: 5 },
              { key: 'Žiadna studená sprcha alebo nechávanie vonku - možnosť podchladenia', number: 6 },
              { key: 'Poloha v sede alebo stabilizovaná poloha' , number: 7}
            ]}
            renderItem={({ item }) => {
              return (
                <AppButton title={item.key} icon={item.number} iconBg="#d39b92" style={{fontSize: 15, fontWeight: 'regular'}} 
                            uppercase={false} borderBottom />

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
      backgroundColor: "#d18273"
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
export default Alkohol;

