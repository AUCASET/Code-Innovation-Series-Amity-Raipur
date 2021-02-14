import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button,ImageBackground,TouchableOpacity,Image ,ScrollView} from 'react-native';
// import AudioComp from '../Helper/Audo'
// import Ap from '../assets/Ap.png'
// import LogicGate from '../assets/logicGate.png'
import trap from '../assets/TRAP.png'

const AP=({ navigation })=> {
  const [count, setCount] = React.useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  return (
    <ScrollView style={{}}>
        <View style={styles.container}>
      <ImageBackground source={require('../assets/bg.jpg')} style={styles.image}>
      {/* <Text style={styles.textHeading}>TRAP</Text> */}
      <View style={{ alignItems: "center", marginTop: 25 }}>
                    <Image
                        style={{ height: 250, width: 280, alignItems: "center" }}
                        source={trap}
                    />
                </View>
      <View style={styles.GameOptions}>
        <Text style={{fontSize:20,marginLeft:20}} onPress={navigation.goBack}>Explaination :-</Text>
        <Text style={{fontSize:20,marginLeft:20,marginTop:10,fontFamily:"serif"}}>
        Lets have example for two girl Diya and Anisha and give them a task to find the total sum whole 10 numbers starting from 1 to 10.
        Diya started counting the addition from 1 took almost a minute to answer which is “55”.
        In the other hand Anisha smartly know a formula in AP that is n*(n+1)/2 and found the value in just 10 seconds. 
        Here we can say the time complexity of Anisha is much faster i.E, 10 sec than the radheeka’s time complexity i.E, 1 min. 
        In programming same logic is applied the only difference is the above paragraph is a real life example which is designed in our app
        </Text>
        <TouchableOpacity style={{marginTop:30,alignItems:"center",marginBottom:40}} onPress={() => navigation.navigate('liveDemoAp')}>
            <Text style={{fontSize:30,color:"#fff",backgroundColor:"#33ff99",borderRadius:50,paddingLeft:25,paddingRight:25,paddingBottom:10,paddingTop:10}} >
                Live Demo
            </Text>
        </TouchableOpacity>
        </View>
      {/* <Button title="Play Sound" onPress={AudioComp} /> */}
      </ImageBackground>
      <StatusBar style="dark" backgroundColor="#129cf3"/>
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
    marginTop:70,
    textAlign: 'center',
  },
  GameOptions:{
    marginTop:0,
    // alignItems: 'center',
    marginBottom:130
  },
  button: {
    alignItems: "center",
    // backgroundColor: "#eae7a2",
    padding: 10,
    paddingLeft:40,
    paddingRight:40
  },
});
export default AP