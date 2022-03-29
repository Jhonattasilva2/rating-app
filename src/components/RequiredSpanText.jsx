import styled from "styled-components"

function RequiredSpanText() {
  return (
    <Span>Please select a number</Span>
  )
}

const Span = styled.span`
color: red;
font-size: 13px;
display: flex;
justify-content: center;
margin: 5px;

`

export default RequiredSpanText