import * as React from 'react';
import { View, Text} from 'react-native';
import { SafeAreaView, FlatList, StyleSheet} from 'react-native';
import BottomNav from '../components/BottomNav';
import AppButton from '../components/AppButton';


const Infarkt = ({navigation}) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style = { styles.container } >
        <View style= { styles.logoContainer }>
          <View style={{paddingBottom:0}}>
            <FlatList

              data={[
                { key: 'PRÍZNAKY:' },
                { key: 'Dlhšie trvajúci nepríjemný pocit, zvieranie až bolesť v strede hrudi' , number: 1},
                { key: 'Pálivá bolesť vystreľuje do ľavého podpazušia, prípadne pod ľavú lopatku' , number: 2},
                { key: 'Prejavom môže byť bolesť v ramenách, v chrbte, krku, čeľusti alebo v žalúdku' , number: 3},
                { key: 'Ťažkosti s dýchaním' , number: 4},
                { key: 'Náhly studený pot, nevoľnosť alebo závrat', number: 5 },
                
                { key: 'PRVÁ POMOC:' },
                { key: 'Neodkladne privoláme záchrannú zdravotnú službu alebo vyhľadáme pohotovosť' , number: 1},
                { key: 'Začíname konať, ak príznaky trvajú viac ako 10 - 15 minút bez prerušenia' , number: 2},
                { key: 'Postihnutého uložíme do pohodlnej polohy - posediačky s podloženými nohami pokrčenými v kolenách' , number: 3},
                { key: 'Uvoľníme odev okolo krku a pása, v miestnosti vyvetráme', number: 4 },
                { key: 'Ak je k dispozícii, podáme zasiahnutej osobe jednu tabletku Anopyrinu, Acylpyrinu alebo Aspirinu 400 mg' , number: 5},
              ]}
              renderItem={({ item }) => {
                return (
                  <AppButton title={item.key} icon={item.number} iconBg="#c5d0e8" style={{fontSize: 15, fontWeight: 'regular'}} uppercase={false} borderBottom />
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
      backgroundColor: "#a5b7dd"
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


export default Infarkt;