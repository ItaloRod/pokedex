import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text } from 'react-native/'
import { Title, ColorView, ColorText, ContainerView, GridView } from '../../styles/global'

function Home<React, FC>(): JSX.Element {
  return (
    <SafeAreaView>
      <ContainerView>
        <Title>Qual Pokémon você está procurando?</Title>
        <GridView>
          <ColorView backgroundColor="#4FC1A6">
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
      </ContainerView>
    </SafeAreaView>
  )
}

export default Home
