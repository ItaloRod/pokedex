import styled from "styled-components/native"

interface ContainerView {
  color: string
  pokemon?: boolean
}

const ContainedView = styled.View<ContainerView>`
  display: flex;
  margin: 5px;
  flex-direction: row;
  background: ${props => props.color || '#ffffff'};
  border-radius: 15px;
  min-width: 155px;
  min-height: ${props => props.pokemon ? '140px' : '60px' };
  ${props => !props.pokemon && `
    align-items: center;
  `}
`

export { ContainedView }
