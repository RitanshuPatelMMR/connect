import React from 'react';
import Navigation from './Navigation';
import { NavigationContainer } from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  );
}

export default App;
