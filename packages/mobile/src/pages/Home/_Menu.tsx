import React from 'react'
import { GridView, ColorText } from '../../styles/global'
import ColorView from '../../components/ColorView'
import { useNavigation } from '@react-navigation/native'

function Menu<React, FC>():JSX.Element {
  const navigation = useNavigation()
  return (
    <>
      <GridView>
          <ColorView backgroundColor="#4FC1A6" onPress={() => navigation.navigate('Pokedex')}>
            <ColorText>Pokédex</ColorText>
          </ColorView>
          <ColorView backgroundColor="#F7786B">
            <ColorText>Moves</ColorText>
          </ColorView>
        </GridView>
        <GridView>
          <ColorView backgroundColor="#58ABF7">
            <ColorText>Abilities</ColorText>
          </ColorView>
          <ColorView backgroundColor="#FFCE4B">
            <ColorText>Itens</ColorText>
          </ColorView>
        </GridView>
        <GridView>
          <ColorView backgroundColor="#7C538C">
            <ColorText>Locations</ColorText>
          </ColorView>
          <ColorView backgroundColor="#B1736C">
            <ColorText>Types</ColorText>
          </ColorView>
        </GridView>
    </>
  )
}
export default Menu
