import React from 'react'
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack'
import Home from '../pages/Home'
import Pokedex from '../pages/Pokedex'
import { BackButton, MenuButton } from '../components/HeaderButtons'
import Pokemon from '../pages/Pokemon'

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
        headerLeft: () => <BackButton color="#303943"/>,
        headerRight:() => <MenuButton  color="#303943"/>
      }} />
      <Stack.Screen options={{
        headerTitle: '',
        headerStyle: {
          elevation: 0,
          backgroundColor: '#46D7AB'
        },
        headerLeft: () => <BackButton color="#FFFFFF"/>,
        headerRight:() => <MenuButton color="#FFFFFF" />
      }} name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
    </>
  )
}

export default Routes
