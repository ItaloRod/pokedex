import React from 'react'
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack'
import Home from '../pages/Home'
import Pokedex from '../pages/Pokedex'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BackButton, MenuButton } from '../components/HeaderButtons'

function Routes<React,FC>(): JSX.Element {

  const Stack = createStackNavigator()
  return (
    <>
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
      <Stack.Screen name="Pokedex" component={Pokedex} options={{
        headerTitle: '',
        headerStyle: {
          elevation: 0,
          backgroundColor: 'transparent'
        },
        headerLeft: () => <BackButton />,
        headerRight:() => <MenuButton />
      }} />
    </Stack.Navigator>
    </>
  )
}

export default Routes
