import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import Header from '../componets/header';
import ButtonCompo from '../componets/ButtonCompo';


const Home = ({ navigation }) => {
    const [codes, setCodes] = useState([]);

    useEffect(() => {
        const codeInterval = setInterval(() => {
            const newCodes = Array.from({ length: 6 }, () => {
                return { code: Math.floor(100000 + Math.random() * 900000), timer: 60 };
            });
            setCodes(newCodes);
        }, 60000);

        return () => clearInterval(codeInterval);
    }, []);

    useEffect(() => {
        const countdown = setInterval(() => {
            setCodes(prevCodes => {
                return prevCodes.map(codeObj => {
                    return { ...codeObj, timer: codeObj.timer > 0 ? codeObj.timer - 1 : 60 };
                });
            });
        }, 1000);

        return () => clearInterval(countdown);
    }, []);
    return (

        <SafeAreaView style={styles.codesContainer}>
            <View style={{ paddingHorizontal: 25, marginTop: 25, }}>
                <Header onPress={() => navigation.goBack()} UserPress={() => navigation.navigate('Profile')} />
            </View>

            <View style={{ flex: 1, marginTop: 25, }} >
                {codes.map((codeObj, index) => (
                    <>
                        <View style={{ marginTop: 5, flex: 1, paddingHorizontal: 25, }} >
                            <View>
                                <Text style={styles.account}>marvitalpur895@gmail.com</Text>
                            </View>
                            <View key={index} style={styles.codeContainer}>
                                <View>
                                    <Text style={styles.code}>{codeObj.code}</Text>
                                </View>
                                <View style={styles.circle}>
                                    <Text style={styles.timer}>{codeObj.timer}s</Text>
                                </View>
                            </View>
                        </View>
                    </>
                ))}
            </View>
            <View style={styles.btncontainer} >
                <ButtonCompo btntext={"Update"} Press={() => { navigation.navigate('Profile') }} />
            </View>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        padding: 10

    },
    codesContainer: {
        justifyContent: 'center',
        marginVertical: 15,
        flex: 2,
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    },
    code: {
        // padding: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0057e7'
    },
    circle: {
        width: 40, height: 40,
        borderWidth: 2,
        borderColor: "red",
        borderRadius: 100,
        justifyContent: 'center'
    },
    timer: {
        textAlign: 'center',
        fontSize: 12,
        color: '#000'
    },
    account: { textAlign: 'justify', color: "#000", fontSize: 16, },
    btncontainer: {
        paddingHorizontal: 20,

    }
});

export default Home;
