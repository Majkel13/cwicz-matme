import React from 'react';
import styled from 'styled-components'

const Input = styled.input`
width: 40px;
text-align:center;
background: #ddd;
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

const Content = ({ tab, tab2, title, onKeyPress, id, onClick }) => (

    <div>
        <Input type="text" value={tab} disabled />
        {title === 'dodawanie' ? <Input type="text" value="+" disabled /> : <Input type="text" value="-" disabled />}
        <Input type="text" value={tab2} disabled />
        <Inputt type="number" id={id} onKeyPress={onKeyPress} className="wyn" />
        <Button onClick={onClick} >Sprawdź</Button>
        <div id={id + 'wynik'} className="odpowiedz" style={{ fontStyle: 'italic', color: 'red' }}>
        </div>
        <div id={id + 'wynik2'} className="odpowiedz" style={{ fontStyle: 'bold', color: 'green' }}>
        </div>
    </div>

)
export default Content