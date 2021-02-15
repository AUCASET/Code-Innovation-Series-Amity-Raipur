import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';
const AudioComp=async()=> {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('../assets/bg_audio.mp3')
    );
    console.log('Playing Sound');
    await sound.playAsync(); 
}
export default AudioComp