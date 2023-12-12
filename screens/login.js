import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ paddingHorizontal: 25 }}>
                <View style={{ marginTop: 50, }}>
                    <Image
                        style={styles.image}
                        source={require('../assets/Alogo.png')}
                        resizeMode='contain' />
                </View>
                <KeyboardAvoidingView>
                    <View style={{
                        paddingHorizontal: 25
                    }}>
                        <Text style={styles.Text}>Login</Text></View>
                    <View style={{ marginTop: 40 }}>
                        <View style={styles.inputrow}>
                            <MaterialIcons name="email" size={24} color='#0057e7' />
                            <TextInput value={email}
                                onChangeText={(text) => setEmail(text)}
                                placeholder='enter your email' placeholderTextColor={'#0057e7'} style={{ marginVertical: 5 }} />
                        </View>
                        <View style={{ marginTop: 10 }} />
                        <View style={styles.inputrow}>
                            <AntDesign name="lock" size={24} color='#0057e7' />
                            <TextInput
                                secureTextEntry={true}
                                value={password}
                                onChangeText={(text) => setPassword(text)} placeholder='enter your password'
                                placeholderTextColor={'#0057e7'}
                                style={{ marginVertical: 5 }} />
                        </View>
                        <View style={styles.textrow}>
                            <Text style={[styles.Text, styles.text2]}>keep me logged</Text>
                            <Text style={[styles.Text, styles.text2, { color: "#0077ff" }]}>Forgot password</Text>
                        </View>
                        <View style={{ marginTop: 10 }} />
                        <Pressable onPress={() => { navigation.navigate('Home') }} style={styles.btn}>
                            <Text style={[styles.text2, { color: '#fff' }]}>Login</Text>
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate('Register')} style={styles.presstext}>
                            <Text style={[styles.text2, { textAlign: 'center', marginTop: 10 }]}>Dont have an account? sign in</Text>
                        </Pressable>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    )
}

export default Login

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

    Text:
        { fontSize: 17, fontWeight: 'bold', marginTop: 10, textAlign: 'center', color: '#000' },
    inputrow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#0057e7',
        paddingHorizontal: 10,
    },
    textrow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#000'
    },
    text2: {
        fontSize: 14, fontWeight: '400',
        color: '#000'
    },
    btn: {
        backgroundColor: '#0057e7',
        marginTop: 30,
        alignSelf: 'center',
        width: 200,
        height: 40, borderRadius: 10,
        padding: 10, justifyContent: 'center',
        alignItems: 'center',
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
