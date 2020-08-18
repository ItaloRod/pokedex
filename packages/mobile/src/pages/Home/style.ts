import styled from 'styled-components/native'


const InputView = styled.View `
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: row;
  justify-content: space-around;
  background: #F5F5F5;
  border-radius: 100px;
  margin: 50px  0;
`

const InputSearch = styled.TextInput`
  width: 100%;
`

const IconView = styled.View`
  display: flex;
  align-items: stretch;
  justify-content: center;
`

export { InputSearch, InputView, IconView }
