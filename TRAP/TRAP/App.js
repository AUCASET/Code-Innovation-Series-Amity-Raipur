// import { StatusBar } from 'expo-status-bar';
// import * as React from 'react';
// import { Text, View, StyleSheet, Button,ImageBackground,TouchableOpacity,Image } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import AudioComp from './Helper/Audo'
// import Ap from './assets/Ap.png'
// import LogicGate from './assets/logicGate.png'
// const Stack = createStackNavigator();
// export default function App() {
//   const [count, setCount] = React.useState(0);
//   const onPress = () => setCount(prevCount => prevCount + 1);
//   return (
//     <View style={styles.container}>
//       <ImageBackground source={require('./assets/bg.jpg')} style={styles.image}>
//       <Text style={styles.textHeading}>TRAP</Text>
//       <View style={styles.GameOptions}>
//         {/* <Text style={{fontSize:20}}>test</Text> */}
//       <TouchableOpacity
//         style={styles.button}
//         onPress={onPress}
//       >
//       <Image
//       style={{height:150,width:150}}
//         source={Ap}
//        />
//         <Text style={{marginTop:15,color:"#fff"}}>Learn Maths</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={onPress}
//       >
//       <Image
//       style={{height:150,width:150,marginTop:15}}
//         source={LogicGate}
//        />
//         <Text style={{marginTop:15,color:"#fff"}}>Learn Logic Gate</Text>
//       </TouchableOpacity>
//       </View>
//       {/* <Button title="Play Sound" onPress={AudioComp} /> */}
//       </ImageBackground>
//       <StatusBar style="dark" backgroundColor="#129cf3"/>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//   },
//   image: {
//     flex: 1,
//     resizeMode: 'cover',
//     // justifyContent: 'center',
//   },
//   textHeading: {
//     color: '#000',
//     fontSize: 30,
//     fontWeight: 'bold',
//     marginTop:70,
//     textAlign: 'center',
//   },
//   GameOptions:{
//     marginTop:100,
//     alignItems: 'center',
//   },
//   button: {
//     alignItems: "center",
//     // backgroundColor: "#eae7a2",
//     padding: 10,
//     paddingLeft:40,
//     paddingRight:40
//   },
// });
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './Screen/Main'
import AP from './Screen/AP'
import liveDemoAp from './Screen/liveDemoAp'
import LogicGateOption from './Screen/LogicGateOptions'
import AndGateScreen from './Screen/AndGateScreen'
import OrGateScreen from './Screen/OrGateScreen'
import XorGateScreen from './Screen/XorGateScreen'
import NorGateScreen from './Screen/NorGateScreen'

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
       headerShown: false
      }}>
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="learnMaths" component={AP} />
        <Stack.Screen name="liveDemoAp" component={liveDemoAp} />
        <Stack.Screen name="LogicGateOption" component={LogicGateOption} />
        <Stack.Screen name="AndGateScreen" component={AndGateScreen} />
        <Stack.Screen name="OrGateScreen" component={OrGateScreen} />
        <Stack.Screen name="XorGateScreen" component={XorGateScreen} />
        <Stack.Screen name="NorGateScreen" component={NorGateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;