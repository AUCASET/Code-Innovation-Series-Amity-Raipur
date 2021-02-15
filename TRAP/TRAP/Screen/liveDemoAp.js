import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, ImageBackground, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import AudioComp from '../Helper/Audo'
import Ap from '../assets/Ap.png'
import LogicGate from '../assets/logicGate.png'
import OldMethodSn from './OldMethodSn';
import NewMethodSn from './NewMethodSn';
import trap from '../assets/TRAP.png'

const liveDemoAp = ({ navigation }) => {

    return (
        <ScrollView>
                     <View style={styles.container}>
                <ImageBackground source={require('../assets/bg.jpg')} style={styles.image}>
                    {/* <Text style={styles.textHeading}>TRAP</Text> */}
                   <View style={{alignItems:"center",marginTop:100}}>
                   <Image
                    style={{height:250,width:280,alignItems:"center"}}
                        source={trap}
                    />
                   </View>
                    <View style={styles.GameOptions}>
                    <OldMethodSn/>
                    <NewMethodSn/>
                    </View>
                    {/* <Button title="Play Sound" onPress={AudioComp} /> */}
                </ImageBackground>
                <StatusBar style="dark" backgroundColor="#129cf3" />
            </View>
 
        </ScrollView>
 );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        marginTop:-70
        // justifyContent: 'center',
    },
    textHeading: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 140,
        textAlign: 'center',
    },
    GameOptions: {
        marginTop: 50,
    },
    button: {
        alignItems: "center",
        padding: 10,
        paddingLeft: 40,
        paddingRight: 40
    },
});
export default liveDemoAp