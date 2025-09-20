// src/App.tsx
import React from 'react';
import Navigation from './Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#1A237E" />
      <Navigation />
    </NavigationContainer>
  );
}

export default App;