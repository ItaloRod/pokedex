import styled from 'styled-components/native'

interface Title {
  align?: string
}

const GridView = styled.View`
  display: flex;
  flex-direction: row;
`
const ContainerView = styled.View`
  display: flex;
  margin: 0 28px;
`
const Title = styled.Text<Title>`
  color: #303943;
  font-weight: bold;
  text-align: ${props => props.align || 'left'};
  font-size: 30px;
`
interface TitleView {
  home?: boolean
}

const TitleView = styled.View<TitleView> `
  margin-top:${props => props.home? '100px' : '34px'};
  display: flex;
  width: 100%;
`

const ColorText = styled.Text`
  margin-left: 16px;
  font-size: 14px;
  line-height: 14px;
  font-weight: bold;
  color: #ffffff;
`
export { ContainerView, Title, ColorText, GridView, TitleView }
