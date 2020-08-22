import styled from 'styled-components/native'

interface Title {
  align?: string
  color: string
}

const GridView = styled.View`
  display: flex;
  flex-direction: row;
`
const ContainerView = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
`
const Title = styled.Text<Title>`
  color: ${props => props.color};
  font-weight: bold;
  text-align: ${props => props.align || 'left'};
  font-size: 30px;
  margin: 0 28px;
`
interface TitleView {
  home?: boolean
}

const TitleView = styled.View<TitleView> `
  margin-top:${props => props.home? '100px' : '10px'};
  margin-bottom: ${props => props.home? '0' : '25px'};
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
