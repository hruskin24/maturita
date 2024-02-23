import * as React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import BottomNav from '../components/BottomNav';

const Krvacanie = ({navigation}) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style = { styles.container } >
        <View style= { styles.logoContainer }>
          <View style={{ paddingBottom: 0 }}>
          <FlatList
            data={[
              { key: 'Uvoľniť sa', number: 1 },
              { key: 'Deti upokojujte', number: 2 },
              { key: 'U detí skontrolovať, či sa v nose nenachádza cudzie teleso (hračka...) ', number: 3 },
              { key: 'Posaďte sa vzpriamene a nakloňte telo a hlavu mierne dopredu', number: 4},
              { key: 'Hlavu nezakláňať - krv nebude stekať do hrdla a zabráni sa tak prípadnému zvracaniu alebo zťaženému dýchaniu', number: 5 },
              { key: 'Dýchajte ústami', number: 6 },
              { key: 'Dvomi prstami tlačte mäkkú časť nosa. Ide o miesto na rozhraní kostennej a chrupkovej časti. Na miesto tlačte bez prerušenia najmenej desať minút', number: 7 },

              { key: 'Po zastavení krvácania aspoň 2 hodiny nesmrkať, nenamáhať sa alebo nekašlať', number: 8 },
              { key: 'Ak krvácanie neprestane, opakujte postup ďalších desať minút', number: 9 },
              
              { key: 'Lekára určite zavolajte, ak:' },
              { key: 'Je krvácanie silné a neprestáva ani po 20 minútach', number: 1 },
              { key: 'Krvácanie je dôsledkom úderu do hlavy alebo po ťažkom zranení (pád, dopravná nehoda, úder do tváre alebo nosa)', number: 2},
              { key: 'Ťažkosti s dýchaním', number: 3 },
              { key: 'Krvácanie je rýchle alebo strata krvi je veľká (približne 0,5 litra krvi)' , number: 4},
              { key: 'Postihnutý používa lieky na riedenie krvi ', number: 5 },
              { key: 'Postihnutý sa lieči na vysoký krvný tlak' , number: 6},
              { key: 'Zvracali ste, v dôsledku prehltnutia veľkého množstva krvi' , number: 7},
      
              { key: "Pri častom krvácaní preventívne užívať 1x denne Ascorutin ako posilnenie cievnej steny" },
            ]}
            renderItem={({ item }) => {
              return (
                <AppButton title={item.key} icon={item.number} iconBg="#f3da99" style={{fontSize: 15, fontWeight: 'regular'}} uppercase={false} borderBottom />
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
      flexDirection: 'row',
        paddingTop: 10,
        backgroundColor: 'white',// horny pasik nad navigation HaHaHa
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f3da87"
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
export default Krvacanie;

