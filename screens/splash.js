import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import ButtonCompo from '../componets/ButtonCompo';

const Splash = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentView}>
                <View style={styles.image}>
                    <Image
                        style={styles.image}
                        source={require('../assets/Alogo.png')}
                        resizeMode='contain' />
                </View>
                <Text style={styles.text}>Stroger Security with Google Authenticator</Text>
                <Text style={styles.text1}>Get verification codes for all your accounts using 2-step  verification</Text>
            </View>
            <ButtonCompo btntext={"Get started"} Press={() => { navigation.navigate('Login') }} />
        </SafeAreaView>
    )
}

export default Splash;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10
    },
    contentView: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    image: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    text: {
        paddingTop: 20,
        color: "#000",
        textTransform: "capitalize",
        fontSize: 25,
        lineHeight: 40,
        fontWeight: '400',
    },
    text1: {
        paddingTop: 20,
        color: "#000",
        textTransform: "capitalize",
        fontSize: 14,
        fontWeight: '400',
    }

})