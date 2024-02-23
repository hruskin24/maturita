
import * as React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView, FlatList } from 'react-native';

const Informacie = ({navigation}) => {
   return (
      <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 20 }}>
        <FlatList
          data={[
            { key: 'Kontakt:' },
            { key: 'hruskaadam@soc.com' },
            { key: '+421 948 348 111'},
            { key: '\n' },
            { key: 'Posledná aktualizácia: 8.1.2023' },
            { key: '\n ' },
            { key: 'PREHLÁSENIE' },
            { key: 'Čestne prehlasujem, že nenesiem žiadnu zodpovednosť pri možných vzniknutých komplikáciách ako i zhoršujúcom sa zdravotnom stave zraneného.' },
         ]}
          renderItem={({ item }) => {
            return (
              <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 20 }}>{item.key}</Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
   );
};

export default Informacie;