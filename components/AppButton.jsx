import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 }; //active capacity

const AppButton = ({ onPress, icon, title, backgroundColor, iconBg, size, height = 126, style, uppercase = true, borderBottom }) => (
    <View style={[styles.appButtonContainer, {height}, borderBottom && styles.borderBottom]}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.appButton, {backgroundColor, height, justifyContent: 'center'}]}
      >
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {!!icon && <View style={[styles.numberContainer, {backgroundColor: iconBg, height}, borderBottom && styles.borderBottom]}>
          {typeof icon === 'number' ? <Text style={styles.number}>{icon}</Text> : <FontAwesomeIcon style={styles.icon} icon={icon} size={50}/>}
          </View>}
          <Text style={[styles.appButtonText, icon ? styles.numberText : styles.noNumberText, style, uppercase && {textTransform: "uppercase"}]}>{title}{size}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

const styles = StyleSheet.create({
    appButton: {
      paddingHorizontal: 0,
    },
    appButtonText: {
      fontSize: 18,
      color: "#161616",
      fontWeight: "bold",
      width: Dimensions.get('screen').width - 126,
      textAlign: 'justify',
      
    },
    numberText: {
      paddingHorizontal: 20,
    },
    noNumberText: {
      lineHeight: 110,
      textAlign: 'center',
      width: '100%',
    },
    appButtonContainer: {
      paddingHorizontal: 0,
    },
    numberContainer: {
      width: 126,
      justifyContent: 'center',
      alignItems: 'center'
    },
    icon: {
      color: '#00000050',
    },
    number: {
      fontSize: 25,
      color: '#161616',
      fontWeight: 'bold'
    },
    borderBottom: {
      borderBottomWidth: 1,
      borderBottomColor: '#33332f'
    },

});

export default AppButton;