import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ContainedView } from './style'
import Pokeball from '../../assets/images/pokeball-white.svg'
import PokeballPokedex from '../../assets/images/pokeball-pokemon.svg'

function ColorView(props: any): JSX.Element {
  const { children, backgroundColor, onPress, pokemon } = props

  return (
    <TouchableOpacity onPress={onPress}>
      <ContainedView pokemon={pokemon} color={backgroundColor}>
        {
          pokemon ?
          <PokeballPokedex style={{ position: 'absolute', right: 0, bottom: 0, opacity: 0.6 }} />
          :
          <Pokeball style={{ position: 'absolute', right: 0, top: 0, opacity: 0.6 }} />
        }
        {children}
      </ContainedView>
    </TouchableOpacity>
  )
}

export default ColorView
