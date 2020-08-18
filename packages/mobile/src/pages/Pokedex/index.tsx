import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Title, ContainerView, TitleView } from '../../styles/global'
import { ScrollView } from 'react-native-gesture-handler'

function Pokedex<React, FC>(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <ContainerView>
          <TitleView>
            <Title align="left">Pokedex</Title>
          </TitleView>
        </ContainerView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Pokedex
