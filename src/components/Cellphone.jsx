import styled from "styled-components"
import cell from '../img/cell.svg'

function Cellphone() {
  return (
    <>
        <Image src={cell}/>
    </>
  )
}

const Image = styled.img`
    width: 150px;
    margin: 10px auto;
`

export default Cellphone