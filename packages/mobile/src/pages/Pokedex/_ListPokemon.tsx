import React from 'react'
import ColorView from '../../components/ColorView'
import { PokemonTitle, PokemonNumber, PokemonContainer, Badge, Row, Column } from './style'
import Pokemons from '../../json/pokemons.json'
import { View, Image } from 'react-native'

type Pokemon = {
  id: string
  name: string
  types: string[]
  color: string
  imageURL: string
}

function ListPokemon () {

  const PokemonCard = ({id, color, name, types, imageURL}: Pokemon): JSX.Element => (
    <ColorView pokemon="true" backgroundColor={color}>

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
            <Image style={{ width: 90, height: 90 }} source={{ uri: imageURL }}/>
          </Column>
        </Row>
      </PokemonContainer>
    </ColorView>
  )

  return (
    <>
    <View style={{ justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap'}}>
    {
      Pokemons.map((pokemon:Pokemon) => <PokemonCard key={pokemon.id} {...pokemon} />)
    }
    </View>
    </>
  )
}


export default ListPokemon
