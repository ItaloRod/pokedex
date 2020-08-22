import styled from "styled-components/native";

interface Background {
  color: string
}

const Background = styled.View<Background>`
  background-color: ${props => props.color};
`

export { Background }
