import styled from "styled-components";
import Div from "./components/Div";

function App() {
  return (
    <Container>
      <Div />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(216, 12%, 8%);
`;

export default App;
