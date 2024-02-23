import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faPhone, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

TouchableOpacity.defaultProps = { activeOpacity: 0.8 }; //active capacity

const BottomNav = ({navigation}) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.item, {backgroundColor: '#e9e9e9'}]} onPress={() => navigation.navigate('Domov')}>
                <FontAwesomeIcon icon={faHouse} size={30} color="#2b2b2b" />
                <Text style={{color: '#2b2b2b'}}>Domov</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.item, {backgroundColor: '#cf0f13'}]} onPress={() => navigation.navigate('Telefónne čísla')}>
                <FontAwesomeIcon icon={faPhone} size={30} color="#fff" />
                <Text style={{color: '#fff'}}>Privolať pomoc</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.item, {backgroundColor: '#e9e9e9'}]} onPress={() => navigation.navigate('Informácie')}>
                <FontAwesomeIcon icon={faInfoCircle} size={30} color="#2b2b2b" />
                <Text style={{color: '#2b2b2b'}}>Informácie</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 10,
        backgroundColor: 'white'// horny pasik nad navigation HaHaHa
    },
    item: {
        width: Dimensions.get('screen').width / 3,
        height: Dimensions.get('screen').width / 3,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default BottomNav;