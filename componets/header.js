import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const Header = ({ onPress, UserPress, }) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity onPress={onPress}>
                    <Entypo name="menu" size={24} color="black" />
                </TouchableOpacity>
                <View style={styles.img}>
                    <Image source={require('../assets/logoT.png')} resizeMode='contain' style={{ width: '100%', height: '100%' }} />
                </View>
                <Text style={styles.text}>Authenticator</Text>
            </View>
            <View style={styles.row}>
                <View style={{ paddingHorizontal: 10 }}>
                    <AntDesign name="clouddownload" size={24} color="#008744" />
                </View>
                <TouchableOpacity onPress={UserPress} style={styles.user}>
                    <Image source={require('../assets/user.png')} resizeMode="contain"
                        style={{ width: '100%', height: '100%' }} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: { flexDirection: 'row', justifyContent: 'space-between' },
    img: {
        width: 100,
        height: 30
    },
    text: {
        color: "#000",
        textTransform: "capitalize",
        fontSize: 16,
        // paddingLeft: 10,
        fontWeight: '400',
    },
    user: {

        height: 30,
        width: 30,
        backgroundColor: 'green',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})