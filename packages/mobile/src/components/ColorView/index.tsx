import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ContainedView } from './style'

function ColorView(props: any): JSX.Element {
  const {children , backgroundColor, onPress, pokemon} = props

  return (
    <TouchableOpacity onPress={onPress}>
      <ContainedView pokemon={pokemon} color={backgroundColor}>
        { children }
      </ContainedView>
    </TouchableOpacity>
  )
}

export default ColorView
