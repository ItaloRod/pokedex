import React from 'react'
import ColorView from '../../components/ColorView'
import { PokemonTitle, PokemonNumber, PokemonContainer, Badge, Row, Column, PokedexContainer } from './style'
import Pokemons from '../../json/pokemons.json'
import { View, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

type Pokemon = {
  id: string
  name: string
  types: string[]
  color: string
  imageURL: string
}

function ListPokemon<React,FC> (): JSX.Element {

  const navigation = useNavigation()

  const PokemonCard = ({id, color, name, types, imageURL}: Pokemon): JSX.Element => (
    <ColorView pokemon="true" backgroundColor={color} onPress={() => navigation.navigate('Pokemon')}>
      <PokemonContainer>
        <PokemonNumber>
          #{id}
        </PokemonNumber>
        <PokemonTitle>
          {name}
        </PokemonTitle>
        <Row>
          <Column>
            {
              types.map((type: string) => <Badge>{type}</Badge>)
            }
          </Column>
          <Column>
            <Image style={{ width: 80, height: 80 }} source={{ uri: imageURL }}/>
          </Column>
        </Row>
      </PokemonContainer>
    </ColorView>
  )

  return (
    <>
    <PokedexContainer>
    {
      Pokemons.map((pokemon:Pokemon) => <PokemonCard key={pokemon.id} {...pokemon} />)
    }
    </PokedexContainer>
    </>
  )
}


export default ListPokemon
