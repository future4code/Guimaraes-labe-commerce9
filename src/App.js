import React from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import Produtos from './components/Produtos/Produtos';
import toyLista from "./material/toys.json";
import shirtsLista from "./material/shirts.json";



const Container = styled.div`
  max-width: 1250px;
  margin: 0 auto;
`

class App extends React.Component{

  state = {
   toys: toyLista,
   shirts: shirtsLista,
      

    
  }  
  

  render() {
    
    return (
      <>
      <Header />
      <Container>
        <p>Labe-Brinquedos</p>

        <Produtos produtos={this.state.produtos} />

      </Container>
      </>
    );
  }
}
  

export default App;
