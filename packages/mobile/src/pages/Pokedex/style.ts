import { Text } from 'react-native';
import styled from "styled-components/native";


const PokemonContainer = styled.View`
  flex-direction: column;
  flex-grow: 1;
  margin: 16px;
`
const PokemonTitle = styled.Text`
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  line-height: 14px;
`

const PokemonNumber = styled.Text`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  font-size: 14px;
  align-self: flex-end;
  color: rgba(0,0,0,0.12);

`

const Row = styled.View`
  flex-direction: row;
`

const Column = styled.View`
 flex-direction: column;
`

const Badge = styled.Text `
  background: rgba(255,255,255, 0.20);
  border-radius: 38px;
  font-size: 10px;
  padding: 0 12px;
  min-width: 50px;
  margin: 6px 0;
  line-height: 18px;
  display: flex;
  font-weight: bold;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
`
export { PokemonTitle, PokemonNumber, PokemonContainer, Badge, Row, Column }
