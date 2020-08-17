import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../pages/Home'

function Routes<React,FC>(): JSX.Element {

  const Stack = createStackNavigator()
  return (
    <>
    <Stack.Navigator screenOptions={{
      headerShown: false
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
    </>
  )
}

export default Routes
