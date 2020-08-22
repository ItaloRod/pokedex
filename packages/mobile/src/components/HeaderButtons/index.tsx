import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { HeaderButton } from './styles'
import { useNavigation } from '@react-navigation/native'



function BackButton<React,FC>(props:any): JSX.Element {
  const navigation = useNavigation()
  return (
    <HeaderButton onPress={() => navigation.goBack()}>
      <Icon name="arrow-back" color={props.color} size={28}/>
    </HeaderButton>
  )
}


function MenuButton<React, FC>(props:any): JSX.Element {
  const navigation = useNavigation()
  return (
    <HeaderButton onPress={() => navigation.goBack()}>
      <Icon name="menu" color={props.color} size={28}/>
    </HeaderButton>
  )
}


export { BackButton, MenuButton}
