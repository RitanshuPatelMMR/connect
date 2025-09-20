import { Pressable, StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useNavigationState } from '@react-navigation/native';


const HomeScreen = () => {
   const navigation = useNavigation();
 return (
   <LinearGradient
     start={{ x: 0, y: 0 }}
     end={{ x: 1, y: 0 }}
     colors={['#4A90E2', '#50C9C3']}
     style={styles.container}
   >
     <SafeAreaView style={styles.safeArea}>
       <View style={styles.content}>
         <Image
           source={{
             uri: 'https://www.zegocloud.com/wp-content/uploads/2021/11/zego-logo-blue.png',
           }}
           style={styles.logo}
           resizeMode="contain"
         />
         <Text style={styles.title}>Welcome to Zego Cloud</Text>
         <Text style={styles.subtitle}>Your gateway to seamless communication</Text>
         <Pressable
         onPress={() => navigation.navigate('Call')}
           style={({ pressed }) => [
             styles.Callbutton,
             {
               opacity: pressed ? 0.7 : 1,
               transform: [{ scale: pressed ? 0.95 : 1 }],
             },
           ]}
         >
           <Text style={styles.buttonText}>Start Video Call</Text>
         </Pressable>
       </View>
     </SafeAreaView>
   </LinearGradient>
 );
};


export default HomeScreen;


const styles = StyleSheet.create({
 container: {
   flex: 1,
 },
 safeArea: {
   flex: 1,
 },
 content: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   paddingHorizontal: 20,
 },
 logo: {
   width: 120,
   height: 120,
   marginBottom: 20,
 },
 title: {
   fontSize: 32,
   fontWeight: 'bold',
   color: '#fff',
   marginBottom: 10,
   textAlign: 'center',
   textShadowColor: 'rgba(0,0,0,0.2)',
   textShadowOffset: { width: 1, height: 1 },
   textShadowRadius: 2,
 },
 subtitle: {
   fontSize: 18,
   color: '#f0f0f0',
   marginBottom: 40,
   textAlign: 'center',
   lineHeight: 24,
   paddingHorizontal: 10,
 },
 Callbutton: {
   backgroundColor: '#fff',
   paddingVertical: 15,
   paddingHorizontal: 30,
   borderRadius: 25,
   elevation: 5,
   shadowColor: '#000',
   shadowOffset: { width: 0, height: 2 },
   shadowRadius: 5,
 },
 buttonText: {
   color: '#4A90E2',
   fontSize: 18,
   fontWeight: '600',
   textAlign: 'center',
 },
});
