import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Title, ContainerView, TitleView } from '../../styles/global'
import Menu from './Menu'
import Search from './Search'
import { ScrollView } from 'react-native-gesture-handler'

function Home<React, FC>(): JSX.Element {
  return (
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
  )
}

export default Home
