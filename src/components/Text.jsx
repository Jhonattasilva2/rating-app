import styled from "styled-components";

function Text() {
  return (
    <>
      <Title>How did we do?</Title>
      <Paragraph>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </Paragraph>
    </>
  );
}

const Title = styled.h2`
color: #FFF;
margin: 30px 0 15px 0;
font-size: 27px;
`;

const Paragraph = styled.p`
font-size: 15px;
color: hsl(217, 12%, 63%);
margin: 0 0 15px 0;

`;

export default Text;
