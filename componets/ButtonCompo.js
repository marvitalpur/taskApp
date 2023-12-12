import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ButtonCompo = ({ Press, btntext }) => {
    return (
        <TouchableOpacity onPress={Press} style={styles.container}>
            <Text style={styles.text}>{btntext}</Text>
        </TouchableOpacity >
    )
}

export default ButtonCompo

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0057e7',

        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: "#ffff",
        textTransform: "capitalize"

    }
})