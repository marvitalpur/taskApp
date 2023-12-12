import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TextInput, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Register = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <View style={{ paddingHorizontal: 25, }}>

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
                        <Text style={styles.Text}>Register</Text></View>
                    <View style={{ marginTop: 40 }}>
                        <View style={styles.inputrow}>
                            <Ionicons name="person" size={24} color="#0057e7" />
                            <TextInput value={name}
                                onChangeText={(text) => setName(text)}
                                placeholderTextColor={"#0057e7"}
                                placeholder='enter your name'
                                style={{ color: '#Aaaa', marginVertical: 5 }} />
                        </View>
                        <View style={{ marginTop: 10 }} />
                        <View style={styles.inputrow}>
                            <MaterialIcons name="email" size={24} color="#0057e7" />
                            <TextInput value={email}
                                onChangeText={(text) => setEmail(text)}
                                placeholderTextColor={"#0057e7"}
                                placeholder='enter your email'
                                style={{ color: '#Aaaa', marginVertical: 5 }} />
                        </View>
                        <View style={{ marginTop: 10 }} />
                        <View style={styles.inputrow}>
                            <AntDesign name="lock" size={24} color="#0057e7" />
                            <TextInput
                                secureTextEntry={true}
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                                placeholderTextColor={"#0057e7"}
                                placeholder='enter your password'
                                style={{ color: '#Aaaa', marginVertical: 5 }} />
                        </View>
                        <View style={{ marginTop: 10 }} />
                        <Pressable onPress={() => { navigation.navigate('Home') }} style={styles.btn}>
                            <Text style={[styles.text2, { color: '#fff' }]}>Register</Text>
                        </Pressable>
                        <Pressable onPress={() => navigation.goBack()} style={styles.presstext}>
                            <Text style={[styles.text2,
                            { textAlign: 'center', marginTop: 10 }]}>
                                Dont have an account? sign up
                            </Text>
                        </Pressable>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    )
}

export default Register;
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
