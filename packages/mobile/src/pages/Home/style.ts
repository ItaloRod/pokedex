import styled from 'styled-components/native'


const InputView = styled.View `
  display: flex;
  width: 100%;
  max-width: 340px;
  flex-direction: row;
  justify-content: space-evenly;
  background: #F5F5F5;
  border-radius: 100px;
  margin: 50px 0;
`

const InputSearch = styled.TextInput`
`

const IconView = styled.View`
  display: flex;
  justify-content: center;
`

export { InputSearch, InputView, IconView }
