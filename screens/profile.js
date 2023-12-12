import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../componets/header'
import ButtonCompo from '../componets/ButtonCompo';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



const Profile = ({ navigation, UserPress }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={{ marginTop: 25 }} />
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <View style={{ marginTop: 10 }} />
                <TouchableOpacity onPress={UserPress} style={styles.user}>
                    <Image source={require('../assets/user.png')} resizeMode="contain"
                        style={{ width: '100%', height: '100%' }} />
                </TouchableOpacity>
                <View style={{ marginTop: 30 }} />
                <View style={styles.inputrow}>
                    <Ionicons name="person" size={24} color="#0057e7" />
                    <TextInput value={name}
                        onChangeText={(text) => setName(text)}
                        placeholderTextColor={"#0057e7"}
                        placeholder='enter your name'
                        style={{ color: '#Aaaa', marginVertical: 5 }} />
                </View>
                <View style={{ marginTop: 15 }} />
                <View style={styles.inputrow}>
                    <AntDesign name="lock" size={24} color="#0057e7" />
                    <TextInput
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        placeholderTextColor={"#0057e7"}
                        placeholder='reset password'
                        style={{ color: '#Aaaa', marginVertical: 5 }} />
                </View>
                <View style={{ marginTop: 15 }} />
                <View style={styles.inputrow}>
                    <AntDesign name="lock" size={24} color="#0057e7" />
                    <TextInput
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        placeholderTextColor={"#0057e7"}
                        placeholder='new password'
                        style={{ color: '#Aaaa', marginVertical: 5 }} />
                </View>
                <View style={{ marginTop: 25 }} />
                <ButtonCompo btntext={"Update"} />
            </View>



        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    content: { marginTop: 5, flex: 1, paddingHorizontal: 15, paddingTop: 20 },
    inputrow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#0057e7',
        paddingHorizontal: 10,
    },
    user: {
        alignSelf: 'center',
        height: 100,
        width: 100,
        backgroundColor: 'green',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',

    },

})

export default Profile