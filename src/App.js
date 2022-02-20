import React from 'react';
import './App.css';
import styled from 'styled-components';
import toys from './data/toys.json'
import shirts from './data/toys.json'
import Header from './components/Header';
import Produtos from './components/Produtos/Produtos';
import Rodape from './components/Footer/Rodape';


const Container = styled.div`
  max-width: 1250px;
  margin: 0 auto;
`

class App extends React.Component{

  state = {
    carrinho: [{   "id": 1,
    "nome": "Arma",
    "value": 150.00,
    "imageUrl": "https://i.ibb.co/9h25HKP/arma.jpg",
    "quantidade": 1,
  }],
    toys: toys,
    shirts: shirts,
  }

  adicionarCarrinho = (produto) => {
    let contem = false

    for (let i = 0; i < this.state.carrinho.length; i++) {
      if (this.state.carrinho[i].id === produto.id) {
        contem = true
      }
    }

    if (!contem) {
      const novoProduto = {...produto, quantidade: 1}
      const novoCarrinho = [...this.state.carrinho, novoProduto]
      this.setState({carrinho: novoCarrinho})
    } else {
      const novoCarrinho = this.state.carrinho.map((item) => {
        console.log(item)
        if (item.id === produto.id) {
          item.quantidade = item.quantidade + 1
          return item
        } else {
          return item
        }
      })
      this.setState({carrinho: novoCarrinho})
    }
  }

  removerCarrinho = (produto) => {
    const novoCarrinho = this.state.carrinho.filter((item) => item.id !== produto.id)
    this.setState({carrinho: novoCarrinho})
  }
  

  render() {
    
    return (
      <>
      <Header carrinho={this.state.carrinho} removerCarrinho={this.removerCarrinho} />
      <Container>
        <p>Labe-Brinquedos</p>

        <Produtos produtos={this.state.toys} adicionarCarrinho={this.adicionarCarrinho} />
      </Container>
      <Rodape/>
      </>
    );
  }
}
  

export default App;
