import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native';
import AudioComp from '../Helper/Audo'
import Ap from '../assets/Ap.png'
import LogicGate from '../assets/logicGate.png'
import trap from '../assets/TRAP.png'
import XorBG from '../assets/XorBG.png'

const XOrGateScreen = ({ navigation }) => {
    const [button_1,setFirstButton]=React.useState(0)
    const [button_2,setSecondButton]=React.useState(0)
    return (
        <ScrollView>
              <View style={styles.container}>
            <ImageBackground source={require('../assets/bg.jpg')} style={styles.image}>
                {/* <Text style={styles.textHeading}>TRAP</Text> */}
                <View style={{ alignItems: "center", marginTop: 40 }}>
                    <Image
                        style={{ height: 250, width: 280, alignItems: "center" }}
                        source={trap}
                    />
                </View>
                <View style={styles.GameOptions}>
                <View style={{backgroundColor:button_1^button_2 ? "green" : "red",paddingTop:20,paddingBottom:20,paddingLeft:60,paddingRight:60}}>
                    <Text style={{color:"#fff",fontSize:30}}>
                        {button_1^button_2 ? "True" : "False"}
                    </Text>
                </View>
                    <Image
                        style={{height:250,width:200}}
                        source={XorBG}
                    />
                </View>
                <View style={{flexDirection:"row"}}>
                <TouchableOpacity
                onPress={()=>{
                    button_1 ? setFirstButton(0) : setFirstButton(1)
                }}
                >
                <Text 
                style={{height:60,width:60,marginLeft:70,backgroundColor:"#000",color:"#fff",textAlign:"center",textAlignVertical:"center",fontSize:40}}>
                    {button_1}
                </Text>
                </TouchableOpacity>
                <TouchableOpacity
                 onPress={()=>{
                    button_2 ? setSecondButton(0) : setSecondButton(1)
                }}
                >
                <Text 
                style={{height:60,width:60,marginLeft:140,backgroundColor:"#000",color:"#fff",textAlign:"center",textAlignVertical:"center",fontSize:40}}>
                    {button_2}
                </Text>
                </TouchableOpacity>
                </View>
                
                    
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
        // justifyContent: 'center',
    },
    textHeading: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 70,
        textAlign: 'center',
    },
    GameOptions: {
        marginTop: 10,
        alignItems: 'center',
    },
    button: {
        alignItems: "center",
        // backgroundColor: "#eae7a2",
        padding: 10,
        paddingLeft: 40,
        paddingRight: 40
    },
});
export default XOrGateScreen