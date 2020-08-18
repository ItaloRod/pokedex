import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ContainedView } from './style'

function ColorView(props: any): JSX.Element {
  const {children , backgroundColor, onPress} = props

  return (
    <TouchableOpacity onPress={onPress}>
      <ContainedView color={backgroundColor}>
        { children }
      </ContainedView>
    </TouchableOpacity>
  )
}

export default ColorView
