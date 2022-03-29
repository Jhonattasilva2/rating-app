import { useState } from "react";
import styled from "styled-components";
import star from "../img/icon-star.svg";
import ThanksDiv from "./ThanksDiv";
import RequiredSpanText from "./RequiredSpanText";

function Div({ rate }) {
  const [value, setValue] = useState(0);
  const [mainDiv, setMainDiv] = useState(true);
  const [thanksDiv, setThanksDiv] = useState(false);
  const [requiredSpan, setRequiredSpan] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === 0) {
      console.log("Favor escolha uma nota");
      setRequiredSpan(true);
    } else {
      setMainDiv(false);
      setThanksDiv(true);
    }
  };

  return (
    <>
      {mainDiv && (
        <MainDiv>
          <YellowStar src={star} />
          <Title>How did we do?</Title>
          <Paragraph>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </Paragraph>
          <FormContainer>
            <List>
              <Item value="1" onClick={handleClick}>
                1
              </Item>
              <Item value="2" onClick={handleClick}>
                2
              </Item>
              <Item value="3" onClick={handleClick}>
                3
              </Item>
              <Item value="4" onClick={handleClick}>
                4
              </Item>
              <Item value="5" onClick={handleClick}>
                5
              </Item>
            </List>
            <Button type="submit" onClick={handleSubmit}>
              SUBMIT
            </Button>
            {requiredSpan && <RequiredSpanText />}
          </FormContainer>
        </MainDiv>
      )}
      {thanksDiv && <ThanksDiv rate={value} />}
    </>
  );
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
  transition: all 0.5s;
`;

const YellowStar = styled.img`
  width: 16px;
  background-color: rgba(124, 135, 152, 0.2);
  padding: 10px;
  border-radius: 50%;
`;

const Title = styled.h2`
  color: #fff;
  margin: 30px 0 15px 0;
  font-size: 27px;
`;

const Paragraph = styled.p`
  font-size: 15px;
  color: hsl(217, 12%, 63%);
  margin: 0 0 15px 0;
`;

const FormContainer = styled.form``;
const List = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding-left: 0;
`;

const Item = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  list-style-type: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: rgba(124, 135, 152, 0.2);
  color: hsl(217, 12%, 63%);
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    background-color: hsl(217, 12%, 63%);
    color: #fff;
  }

  &:focus {
    background-color: hsl(25, 97%, 53%);
    color: #fff;
  }
  &:active {
    transform: scale(0.70);
  }
`;

const Button = styled.button`
  width: 100%;
  border: none;
  background-color: hsl(25, 97%, 53%);
  height: 40px;
  border-radius: 20px;
  color: #fff;
  font-family: "Overpass" sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
  margin-top: 15px;
  transition: all 0.4s;

  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: hsl(25, 97%, 53%);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export default Div;
