import React from 'react'
import styled from 'styled-components'

const Inputt = styled.input`
width: 40px;
text-align:center;
background: bisque;
font-size: 20px;
margin: 5px;
border: 0;
font-family: 'Indie Flower', cursive;
font-weight: 600;
    margin: 4px ;
    background-position: 0 0px;
    background-image: -webkit-repeating-linear-gradient(0deg, #80DFFF, #80DFFF 1px, transparent 1px, transparent 15px), -webkit-repeating-linear-gradient(90deg, #80DFFF, #80DFFF 1px, transparent 1px, transparent 15px);
    background-image: repeating-linear-gradient(0deg, #80DFFF, #80DFFF 1px, transparent 1px, transparent 15px), repeating-linear-gradient(90deg, #80DFFF, #80DFFF 1px, transparent 1px, transparent 15px);
`


const Button = styled.button`
font-size: 16px;
border-radius: 15px;
padding: 5px 14px;
background: #333;
color: bisque;
border: 0;
`
const Select = styled.select`
font-size: 20px;
background: bisque;
margin: 4px ;
    background-position: 0 0px;
    background-image: -webkit-repeating-linear-gradient(0deg, #80DFFF, #80DFFF 1px, transparent 1px, transparent 15px), -webkit-repeating-linear-gradient(90deg, #80DFFF, #80DFFF 1px, transparent 1px, transparent 15px);
    background-image: repeating-linear-gradient(0deg, #80DFFF, #80DFFF 1px, transparent 1px, transparent 15px), repeating-linear-gradient(90deg, #80DFFF, #80DFFF 1px, transparent 1px, transparent 15px);
`

const MyHeader = ({ onClick, title, generuj }) => (

    <div>
        <header>
            <h1>Pora na matematykę</h1>
        </header>
      Wybierz jakie działanie chcesz ćwiczyć
        <Select id="dzialanie">
            <option value="dodawanie">Dodawanie</option>
            <option value="odejmowanie">Odejmowanie</option>
        </Select>
        <Button onClick={onClick}>Zatwierdź</Button>
        <h3>Poćwicz {title}</h3>
       Wybierz ile zadań chcesz zrobić
        <Inputt id="ilosc" type="number" max="40" min="1" />
        <Button onClick={generuj}>Generuj</Button>
    </div>

)
export default MyHeader