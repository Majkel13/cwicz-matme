
import React, { Component } from 'react';
import styled from 'styled-components'
import MyHeader from './component/header.js'
import Content from './component/content.js'

const Container = styled.div`
text-align: center;
margin: auto;
font-size: 20px;
`
class Row extends Component {

  static defaultProps = {
    ile: 0,
    title: 'dodawanie'
  }


  state = {
    ile: this.props.ile,
    title: this.props.title
  }

  check = (i, liczba1, liczba2, dzialanie) => {

    const wynik = parseInt(document.getElementById(i).value);
    const dobryWynik = document.getElementById(i + 'wynik2');
    const zlyWynik = document.getElementById(i + 'wynik');

    if (dzialanie === 'dodawanie') {
      if (liczba1 + liczba2 === wynik) {
        dobryWynik.innerHTML = 'Brawo! Poprawna odpowiedź'
        zlyWynik.innerHTML = ''
      } else {
        zlyWynik.innerHTML = 'Niestety błędna odopwiedź'
        dobryWynik.innerHTML = ''
      }

    } else if (dzialanie === "odejmowanie") {

      if (liczba1 - liczba2 === wynik) {
        dobryWynik.innerHTML = 'Brawo! Poprawna odpowiedź'
        zlyWynik.innerHTML = ''
      } else {
        zlyWynik.innerHTML = 'Niestety błędna odopwiedź'
        dobryWynik.innerHTML = ''
      }
    }

  }
  checkk = (event, i, liczba1, liczba2, dzialanie) => {

    if (event.key === 'Enter') {
      this.check(i, liczba1, liczba2, dzialanie)
    }
  }
  generuj = () => {
    if (document.getElementById("ilosc").value > 40) {
      this.setState({ ile: 40 });
    } else {
      this.setState({ ile: document.getElementById("ilosc").value });
    }

    let x = document.getElementsByClassName("odpowiedz");
    let wyn = document.getElementsByClassName("wyn");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].innerHTML = "";
    }
    for (i = 0; i < wyn.length; i++) {
      wyn[i].value = "";
    }

  }

  wybierz = () => {
    this.setState({ title: document.getElementById("dzialanie").value })
    let x = document.getElementsByClassName("odpowiedz");
    let wyn = document.getElementsByClassName("wyn");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].innerHTML = "";
    }
    for (i = 0; i < wyn.length; i++) {
      wyn[i].value = "";

    }
  }

  render() {
    const tablica = [];
    const tablica2 = [];
    for (let i = 0; i < this.state.ile; i++) {
      tablica[i] = Math.floor(Math.random() * 100);
    }
    for (let i = 0; i < this.state.ile; i++) {
      tablica2[i] = Math.floor(Math.random() * 100);
    }

    return (
      <Container>
        <MyHeader onClick={this.wybierz} title={this.state.title} generuj={this.generuj} />

        {tablica.map((tab, i) => <div>
          <Content tab={tab} tab2={tablica2[i]} title={this.state.title}
            onKeyPress={(e) => this.checkk(e, i, tab, tablica2[i], this.state.title)} id={i}
            onClick={() => this.check(i, tab, tablica2[i], this.state.title)} />
        </div>)}

      </Container>

    )
  }
}

class App extends Component {

  render() {
    return (
      <div >
        <Row />
      </div>
    );
  }
}

export default App;
