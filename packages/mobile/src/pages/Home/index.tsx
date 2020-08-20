import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Title, ContainerView, TitleView } from '../../styles/global'
import Menu from './_Menu'
import Search from './_Search'
import { ScrollView } from 'react-native-gesture-handler'
import  Pokeball from '../../assets/images/pokeball.svg'

function Home<React, FC>(): JSX.Element {
  return (
    <>
    <Pokeball style={{ width: 163, height: 192, position: 'absolute', right: 0 }}/>
    <SafeAreaView>
      <ScrollView>
        <ContainerView>
          <TitleView home>
            <Title align="center">Qual Pokémon você está procurando?</Title>
          </TitleView>
          <Search />
          <Menu />
        </ContainerView>
      </ScrollView>
    </SafeAreaView>
    </>
  )
}

export default Home
