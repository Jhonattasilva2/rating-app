import styled from "styled-components"

function Rate({rate}) {
  return (
    <>
        <SpanRate>You selected {rate} out of 5</SpanRate>
    </>
  )
}

const SpanRate = styled.span`
margin: 20px auto;
text-align: center;
color: hsl(25, 97%, 53%);
background-color: rgba(124, 135, 152, 0.2);
padding: 5px 15px;
border-radius: 20px;
`



export default Rate