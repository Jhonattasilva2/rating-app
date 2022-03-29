import styled from "styled-components"
import Cellphone from "./Cellphone";
import Rate from "./Rate";
import ThanksText from "./ThanksText";

function ThanksDiv({rate}) {
  return (
    <Div>
        <Cellphone/>
        <Rate rate={rate}/>
        <ThanksText/>
    </Div>
  )
}

const Div = styled.div`
  width: 325px;
  height: 320px;
  padding: 30px;
  background-color: hsl(213, 19%, 18%);
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.5s;
`;

export default ThanksDiv