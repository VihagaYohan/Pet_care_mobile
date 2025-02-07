/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import type {PropsWithChildren} from 'react';

// screens
import {OnboardingScreen} from './app/screens/'

// navigation
import {AppNavigator} from './app/navigation'

const App = () => {
  return (
   /*  <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer> */
    <AppNavigator/>
  )
}

export default App;
