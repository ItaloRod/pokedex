import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Title, ContainerView, TitleView, GridView } from '../../styles/global'
import { ScrollView } from 'react-native-gesture-handler'
import ListPokemon from './_ListPokemon'

function Pokedex<React, FC>(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <ContainerView>
          <TitleView>
            <Title color="#303943" align="left">Pokedex</Title>
          </TitleView>
            <ListPokemon />
        </ContainerView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Pokedex
