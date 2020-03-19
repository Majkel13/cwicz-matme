
import React,{ Component } from 'react';
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
const Container = styled.div`
text-align: center;
margin: auto;
font-size: 20px;
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
const Select = styled.select`
font-size: 20px;
background: bisque;

margin: 4px ;
    background-position: 0 0px;
    background-image: -webkit-repeating-linear-gradient(0deg, #80DFFF, #80DFFF 1px, transparent 1px, transparent 15px), -webkit-repeating-linear-gradient(90deg, #80DFFF, #80DFFF 1px, transparent 1px, transparent 15px);
    background-image: repeating-linear-gradient(0deg, #80DFFF, #80DFFF 1px, transparent 1px, transparent 15px), repeating-linear-gradient(90deg, #80DFFF, #80DFFF 1px, transparent 1px, transparent 15px);
`

class Row extends Component{

  static defaultProps = {
   
    ile: 0,
    title: 'dodawanie'
}


state={
    ile : this.props.ile,
    title: this.props.title
}
  
  check = (event,i,liczba1, liczba2, dzialanie) =>{
    
    const wynik = parseInt(document.getElementById(i).value);
    
    if(dzialanie === 'dodawanie'){
      if(liczba1 + liczba2 === wynik)
    {
      document.getElementById(i+'wynik2').innerHTML='Brawo! Poprawna odpowiedź'
      document.getElementById(i+'wynik').innerHTML=''
    }else{
      document.getElementById(i+'wynik').innerHTML='Niestety błędna odopwiedź'
      document.getElementById(i+'wynik2').innerHTML=''
    }

  }else if(dzialanie === "odejmowanie"){
   
      if(liczba1 - liczba2 === wynik)
    {
      document.getElementById(i+'wynik2').innerHTML='Brawo! Poprawna odpowiedź'
      document.getElementById(i+'wynik').innerHTML=''
    }else{
      document.getElementById(i+'wynik').innerHTML='Niestety błędna odopwiedź'
      document.getElementById(i+'wynik2').innerHTML=''
    }

  }

  }
  checkk = (event,i,liczba1, liczba2, dzialanie) =>{
    
    if(event.key === 'Enter'){
      const wynik = parseInt(document.getElementById(i).value);
      
      if(dzialanie === 'dodawanie'){
          if(liczba1 + liczba2 === wynik)
        {
          document.getElementById(i+'wynik2').innerHTML='Brawo! Poprawna odpowiedź'
          document.getElementById(i+'wynik').innerHTML=''
        }else{
          document.getElementById(i+'wynik').innerHTML='Niestety błędna odopwiedź'
          document.getElementById(i+'wynik2').innerHTML=''
        }

      }else if(dzialanie === "odejmowanie"){
       
          if(liczba1 - liczba2 === wynik)
        {
          document.getElementById(i+'wynik2').innerHTML='Brawo! Poprawna odpowiedź'
          document.getElementById(i+'wynik').innerHTML=''
        }else{
          document.getElementById(i+'wynik').innerHTML='Niestety błędna odopwiedź'
          document.getElementById(i+'wynik2').innerHTML=''
        }

      }
      
    }
  }
  generuj = () =>{
    if(document.getElementById("ilosc").value>40){
      this.setState({ile: 40});
    }else{
      this.setState({ile: document.getElementById("ilosc").value});
    }
    
    
    let x =  document.getElementsByClassName("odpowiedz");
    let wyn =  document.getElementsByClassName("wyn");
    var i;
    for( i = 0; i < x.length; i++){
        x[i].innerHTML="";
        
    }
    for( i = 0; i < wyn.length; i++){
      wyn[i].value="";
      
  }
        
        }

  wybierz = () =>{
      this.setState({title: document.getElementById("dzialanie").value})
      let x =  document.getElementsByClassName("odpowiedz");
      let wyn =  document.getElementsByClassName("wyn");
      var i ;
    for( i = 0; i < x.length; i++){
        x[i].innerHTML="";
    }
    for( i = 0; i < wyn.length; i++){
      wyn[i].value="";
      
  }
    }

  render(){
    const tablica = [];
    const tablica2 = [];
    for(let i=0; i<this.state.ile; i++){
      tablica[i]= Math.floor(Math.random()*100);
    }
    for(let i=0; i<this.state.ile; i++){
      tablica2[i]= Math.floor(Math.random()*100);
    }
  
    return(
      <Container>
        <header>
          <h1>Pora na matematykę</h1>
        </header>
        Wybierz jakie działanie chcesz ćwiczyć
        <Select id="dzialanie">
            <option value="dodawanie">Dodawanie</option>
            <option value="odejmowanie">Odejmowanie</option>
          </Select>
          <Button onClick={this.wybierz}>Zatwierdź</Button>
        <h3>Poćwicz {this.state.title}</h3> 
        
        Wybierz ile zadań chcesz zrobić
          <Inputt id="ilosc" type="number" max="40" min="1"/>
          <Button onClick={this.generuj}>Generuj</Button>
          <div>
          {tablica.map((tab,i) =><div> 
            <Input type="text" value={tab} disabled/>
            {this.state.title ==='dodawanie' ?  <Input type="text" value="+" disabled/> : <Input type="text" value="-" disabled/>}
            <Input type="text" value={tablica2[i]}   disabled/>
            <Inputt  type="number" id={i} className="wyn" onKeyPress={(e ) => this.checkk(e,i,tab,tablica2[i], this.state.title)}/>
            <Button onClick={(e) => this.check(e,i,tab,tablica2[i],this.state.title)} >Sprawdź</Button>
              <div id={i+'wynik'} className="odpowiedz" style={{fontStyle: 'italic', color: 'red'}}>

              </div>
              <div id={i+'wynik2'} className="odpowiedz"  style={{fontStyle: 'bold', color: 'green'}}>

              </div>
              
          </div>)}
        </div>
      </Container>
      
    )
  }
}

class App extends Component {

   render(){     
      return (
      <div >
          <Row />
      </div>
    );
   }
}

export default App;
