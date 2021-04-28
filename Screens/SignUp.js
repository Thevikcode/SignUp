import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Input from '../Component/Input';

const SignUp = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="arrow-back" size={25} color='#fff' style={styles.backarrow} />
                <code style={{color: '#fff', fontSize: 40, fontWeight: '700', marginLeft: 25}}>SignUp</code>
            </View>
            <View style={{marginTop: 50, marginHorizontal: 20}}>
                <code style={{color: '#dedede', fontSize: 15, marginBottom: 20}}>
                    Signup with one of the following options.
                </code>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.signinoptions}>
                        <Ionicons name="logo-google" size={30} color="#fff" />
                    </View>
                    <View style={styles.signinoptions}>
                        <Ionicons name="logo-apple" size={30} color="#fff" />
                    </View>
                </View>
            </View>
            <View style={styles.inputview}>
                <Input text="Name" placeholder="Hehe Boi" />
                <Input text="Email" placeholder="Melon@melon.com" />
                <Input text="Password" placeholder="MelonMusk" />
            </View>
            <View style={styles.SignUpNow}>
                <code style={{fontSize: 25, fontWeight: '600', color: '#fff'}}>Create Account</code>
            </View>
            <View style={{marginTop: 10, justifyContent: 'center', flexDirection: 'row', color: '#fff', fontSize: 15}}>
                <code>Already have an account?</code>
                <code style={{fontWeight: '1000', marginLeft: 5}} onClick={() => navigation.navigate('Login')}>Login</code>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1b1b1b', 
        height: '100%', 
        width: '100%'
    },
    header: {
        marginTop: 35, 
        marginHorizontal: 20, 
        flexDirection: 'row', 
        color: '#fff', 
        alignItems: 'center'
    },
    backarrow: {
        flexDirection: 'row', 
        color: '#fff', 
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#424242',
        borderRadius: 10
    },
    signinoptions: {
        height: 60, 
        width: '48%', 
        backgroundColor: '#414141', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderColor: '#424242', 
        borderWidth: 1, 
        borderRadius: 10
    },
    inputview: {
        marginHorizontal: 20,
        marginTop: 10
    },
    SignUpNow: {
        marginTop: 30,
        alignSelf: 'center',
        height: 65,
        width: '90%',
        backgroundColor: '#fe676e',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default SignUp;
