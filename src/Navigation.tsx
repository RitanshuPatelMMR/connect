//src/Navigation.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import CallScreen from './CallScreen';
import UserNameScreen from './UserNameScreen';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1A237E', // A deep blue color for the header
        },
        headerTintColor: '#E0F7FA', // Light cyan color for text and icons
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerBackTitleVisible: false, // Hides the back button text on iOS
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Zenith Video Calls', headerShown: false }} />
      <Stack.Screen name="UserName" component={UserNameScreen} options={{ title: 'Join a Call' }} />
      <Stack.Screen name="Call" component={CallScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default Navigation;