import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import BottomStackScreen from './screens/BottomStackScreen';

export default function App() {

  return (
    <NavigationContainer>
      <BottomStackScreen/>
      </NavigationContainer>
  );
}

