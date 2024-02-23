import * as React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView, FlatList, StyleSheet} from 'react-native';
import BottomNav from '../components/BottomNav';
import AppButton from '../components/AppButton';

const Lieky= ({navigation}) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style = { styles.container } >
        <View style= { styles.logoContainer }>
          <View style={{paddingBottom: 0 }}>
            <FlatList

              data={[
                { key: 'Odstráneniť zvyšky tabliet z úst a ústa vypláchnuť' , number: 1},
                { key: 'Podať 1 g aktívneho (čierneho) uhlia (antidótum) na 1 kg hmotnosti postihnutého', number: 2 },
                { key: 'Vyvolávať zvracanie - netreba sa bát vzniku kŕčov' , number: 3},
                { key: 'Volať na linku národneho toxikologického informačného centra alebo záchrannú zdravotnú službu' , number: 4},
                { key: 'Pozbierať lieky, obaly od liekov a všetko odovzdať záchranárom', number: 5 },
              ]}
              renderItem={({ item }) => {
                return (
                  <AppButton title={item.key} icon={item.number} iconBg="#f7b7a6" style={{fontSize: 15, fontWeight: 'regular'}} uppercase={false} borderBottom />
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
      backgroundColor: "#ffa58c"
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


export default Lieky;

