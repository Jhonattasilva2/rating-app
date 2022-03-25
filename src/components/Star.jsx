import styled from "styled-components"
import star from '../img/icon-star.svg'

function Star() {
  return (
    <YellowStar src={star} />
  )
}

const YellowStar = styled.img`
width: 16px;
background-color: rgba(124, 135, 152, 0.2);
padding: 10px;
border-radius: 50%;
`

export default Star