import styled from "styled-components"
import {useState} from 'react'


function Form() {

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.value);
}



  return (
    <FormContainer>
        <List>
            <Item>1</Item>
            <Item>2</Item>
            <Item>3</Item>
            <Item>4</Item>
            <Item>5</Item>
        </List>
        <Button type="submit" onClick={handleSubmit}>SUBMIT</Button>
    </FormContainer>
  )
}

const FormContainer = styled.form`

`
const List = styled.ul`
display: flex;
justify-content: space-between;
width: 100%;
align-items: center;
padding-left: 0;
`

const Item = styled.li`
display: flex;
align-items: center;
justify-content: center;
margin: 0;
list-style-type: none;
width: 50px;
height: 50px;
border-radius: 50%;
background-color: rgba(124, 135, 152, 0.2);
color: hsl(217, 12%, 63%);
cursor: pointer;
transition:  all 0.4s;


&:hover {
    background-color: hsl(25, 97%, 53%);
    color: #FFF;
}

&:active {
    background-color: hsl(217, 12%, 63%);
    color: #FFF;
}
`

const Button = styled.button`
width: 100%;
border: none;
background-color: hsl(25, 97%, 53%);
height: 40px;
border-radius: 20px;
color: #FFF;
font-family: 'Overpass' sans-serif;
font-weight: bold;
letter-spacing: 2px;
margin-top: 15px;
transition:  all 0.4s;

cursor: pointer;

&:hover {
    background-color: #FFF;
    color: hsl(25, 97%, 53%);
}

&:active {
    transform: scale(0.98);
}

`

export default Form