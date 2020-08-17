import styled from 'styled-components/native'

const GridView = styled.View`
  display: flex;
  flex-direction: row;
`
const ContainerView = styled.View`
  display: flex;
  align-items: center;
`
const Title = styled.Text`
  color: #303943;
  font-weight: bold;
  text-align: center;
  font-size: 30px;
  margin-top: 100px;
`
const ColorView = styled.View`
  display: flex;
  margin: 5px;
  flex-direction: row;
  align-items: center;
  box-shadow: 0 14px 28px ${props => props.backgroundColor};
  background: ${props => props.backgroundColor || '#ffffff'};
  border-radius: 15px;
  min-width: 155px;
  min-height: 60px;
`

const ColorText = styled.Text`
  margin-left: 16px;
  font-size: 14px;
  line-height: 14px;
  font-weight: bold;
  color: #ffffff;
`
export { ContainerView, Title, ColorView, ColorText, GridView }
