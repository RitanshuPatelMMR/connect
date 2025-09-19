import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import CallScreen from './CallScreen';
const Navigation = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenoptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Call" component={CallScreen} />
    </Stack.Navigator>
  )
}

export default Navigation

const styles = StyleSheet.create({})