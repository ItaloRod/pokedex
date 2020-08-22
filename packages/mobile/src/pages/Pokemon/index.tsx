import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Background } from './style'
import { Title } from '../../styles/global'
import StatusBar from '../../components/StatusBar'
function Pokemon<React,FC>(props: any): JSX.Element {

  // const { backgroundColor } = props

  return (
    <ScrollView>
      <StatusBar backgroundColor="#46D7AB" barStyle="light-content" />
      <Background color="#46D7AB">
        <Title color="#ffffff">Bulbasaur</Title>
      </Background>
    </ScrollView>
  )
}

export default Pokemon
