import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView, FlatList } from 'react-native';
import BottomNav from '../components/BottomNav';
import AppButton from '../components/AppButton';
const Chemikalie = ({navigation}) => {

   return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style = { styles.container } >
          <View style= { styles.logoContainer }>
           <View style={{ paddingBottom: 0 }}>
          <FlatList

            data={[            

              { key: 'Po požití nič nejesť, ani nič nepiť', number: 1 },
              { key: "Nevyvolávať zvracanie po vypití: leptavé prípravky (penivých prípravkov alebo riedidiel, kyselín, leštidiel, lúhov a vonných/lampových olejov", number: 2},
              { key: "Vyvolávať zvracanie:  nemrznúce zmesi, brzdové kvapaliny, pesticídy - hneď potom podať 1 g čierneho uhlia na 1 kg hmotnosti rozmiešaného vo vode", number: 3},
              { key: 'Pozbierať obaly obsahujúce názov a zloženie jedu, kontaktovať záchrannú službu a obaly odovzdať záchranárom', number: 4},
            ]}
            renderItem={({ item }) => {
              return (
                <AppButton title={item.key} icon={item.number} iconBg="#e5a89e" style={{fontSize: 15, fontWeight: 'regular'}} uppercase={false} borderBottom />
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
      backgroundColor: "#ec9682"
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

export default  Chemikalie;

