import styled from "styled-components"


function ThanksText() {
  return (
    <>
        <ThanksTitle>Thank you!</ThanksTitle>
        <ThanksParagraph>We appreciate you taking the time to give a rating. If you ever need more support, 
  don't hesitate to get in touch!</ThanksParagraph>
    </>
  )
}

const ThanksTitle = styled.h2`
color: #FFF;
text-align: center;
margin-top: 15px;
margin-bottom: 10px;
`

const ThanksParagraph = styled.p`
color: hsl(217, 12%, 63%);
text-align: center;
margin: 0 auto;
font-size: 15px;

`

export default ThanksText