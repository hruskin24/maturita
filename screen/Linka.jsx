import React, { Component } from 'react';
 
import { StyleSheet, Text, View, TouchableOpacity, Linking, Platform } from 'react-native';
 
export default class Zachranar extends Component {
 
  dialCall = () => {
 
    let phoneNumber = '';
 
    if (Platform.OS === 'android') {
      phoneNumber = 'tel:112112}';
    }
    else {
      phoneNumber = 'telprompt:112112';
    }
 
    Linking.openURL(phoneNumber);
  };
 
  render() {
    return (
      <View style={styles.MainContainer}>
 
        <TouchableOpacity onPress={this.dialCall} activeOpacity={0.7} style={styles.button} >
 
          <Text style={styles.TextStyle}>OPEN PHONE NUMBER IN DIAL SCREEN</Text>
 
        </TouchableOpacity>
 
      </View>
 
    );
  }
}


 
const styles = StyleSheet.create({
 
  MainContainer: {
    marginTop: 80,
    flex: 1,
    justifyContent: 'center',
    //position: "relative",
    padding: 10,
    
    
  },
  button: {
 
    elevation: 8,
    backgroundColor: "#FF0000",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal:20,
    marginVertical: 10,
    justifyContent: 'center',
    //alignItems:'center',
  },
 
  TextStyle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  }
 
});
//export default Zachranar;