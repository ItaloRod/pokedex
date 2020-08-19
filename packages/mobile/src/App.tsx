/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react'
import {
  StatusBar,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes/index.routes';
import theme from './theme';
const App = () => {

  return (
    <>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <NavigationContainer theme={theme}>
        <Routes />
      </NavigationContainer>
    </>
  )
}

export default App;
