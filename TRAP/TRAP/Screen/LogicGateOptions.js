import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native';
import AudioComp from '../Helper/Audo'
import Ap from '../assets/Ap.png'
import LogicGate from '../assets/logicGate.png'
import trap from '../assets/TRAP.png'
import andGate from '../assets/andGate.png'
import orGate from '../assets/orGate.png'
import xorGate from '../assets/xorGate.png'
import norGate from '../assets/norGate.png'
const LogicGateOption = ({ navigation }) => {
    const [count, setCount] = React.useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);
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
                    {/* <Text style={{fontSize:20}}>test</Text> */}
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('AndGateScreen')}
                    >
                        <Image
                            style={{ height: 60, width: 90 }}
                            source={andGate}
                        />
                        <Text style={{ marginTop: 15, color: "#fff" }}>Visualise AND Gate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('OrGateScreen')}
                    >
                        <Image
                            style={{ height: 50, width: 90 }}
                            source={orGate}
                        />
                        <Text style={{ marginTop: 15, color: "#fff" }}>Visualise OR Gate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('XorGateScreen')}
                    >
                        <Image
                            style={{ height: 50, width: 90 }}
                            source={xorGate}
                        />
                        <Text style={{ marginTop: 15, color: "#fff" }}>Visualise XOR Gate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('NorGateScreen')}
                    >
                        <Image
                            style={{ height: 50, width: 90 }}
                            source={norGate}
                        />
                        <Text style={{ marginTop: 15, color: "#fff" }}>Visualise NOR Gate</Text>
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
        marginTop: 20,
        // alignItems: 'center',
    },
    button: {
        alignItems: "center",
        // backgroundColor: "#eae7a2",
        padding: 10,
        paddingLeft: 40,
        paddingRight: 40
    },
});
export default LogicGateOption