import React from 'react'
import { InputView, IconView } from './style'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TextInput } from 'react-native-gesture-handler'

function Search<React,FC> ():JSX.Element {
  return (
    <>
      <InputView>
        <IconView>
          <Icon name="search" size={24}/>
        </IconView>
        <TextInput placeholder="Search Pokemon, Move, Ability etc"/>
      </InputView>
    </>
  )
}

export default Search
