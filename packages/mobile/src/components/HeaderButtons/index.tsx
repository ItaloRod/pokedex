import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { HeaderButton } from './styles'
import { useNavigation } from '@react-navigation/native'



function BackButton<React,FC>(): JSX.Element {
  const navigation = useNavigation()
  return (
    <HeaderButton onPress={() => navigation.goBack()}>
      <Icon name="arrow-back" color="#303943" size={28}/>
    </HeaderButton>
  )
}


function MenuButton<React, FC>(): JSX.Element {
  const navigation = useNavigation()
  return (
    <HeaderButton onPress={() => navigation.goBack()}>
      <Icon name="menu" color="#303943" size={28}/>
    </HeaderButton>
  )
}


export { BackButton, MenuButton}
