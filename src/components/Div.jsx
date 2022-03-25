import styled from "styled-components"
import Star from "./Star"
import Text from "./Text"
import Form from "./Form"

function Div() {
  return (
    <MainDiv>
        <Star />
        <Text />
        <Form/>
    </MainDiv>
  )
}

const MainDiv = styled.div`
width: 325px;
height: 320px;
padding: 30px;
background-color: hsl(213, 19%, 18%);
border-radius: 25px;
display: flex;
flex-direction: column;
overflow: hidden;
`

export default Div