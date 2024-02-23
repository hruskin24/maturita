import * as React from 'react';
import { Button, View, Alert, Text, StyleSheet } from 'react-native';


const Pomoc = ({navigation}) => {
  return (
     
       <Text>Pomoc</Text>
  
  )
};
/*
const Pomoc = ({navigation}) => {
   return (
      <View style={styles.screenContainer}>
        <Text>Pomoc</Text>
    </View>
   )
};

const styles = StyleSheet.create({
   screenContainer: {
     marginTop: 80,
     flex: 1,
     justifyContent: 'center',
     position: "absolute",
     padding: 10,
     
     
     
   },
   appButtonContainer: { //vsetko ohladom buttonu ako takeho
     elevation: 8,
     backgroundColor: "#e8562a",
     borderRadius: 10,
     paddingVertical: 10,
     paddingHorizontal:20,
     marginVertical: 10,
     justifyContent: 'center'
 
   },
   appButtonText: { //text buttonu
     fontSize: 18,
     color: "#fff",
     fontWeight: "bold",
     alignSelf: "center",
     textTransform: "uppercase"
   }
 });

 const AppButton = ({ onPress, title }) => (
   <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
     <Text style={styles.appButtonText}>{title}</Text>
   </TouchableOpacity>
 );

*/
export default Pomoc;