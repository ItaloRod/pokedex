import styled from "styled-components/native"

interface ContainerView {
  color: string
}

const ContainedView = styled.View<ContainerView>`
  display: flex;
  margin: 5px;
  flex-direction: row;
  align-items: center;
  box-shadow: 0 14px 28px ${props => props.color};
  background: ${props => props.color || '#ffffff'};
  border-radius: 15px;
  min-width: 155px;
  min-height: 60px;
`

export { ContainedView }
