import React from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import Produtos from './components/Produtos/Produtos';
import products from './products';


const Container = styled.div`
  max-width: 1250px;
  margin: 0 auto;
`

class App extends React.Component{

  state = {
    carrinho: []
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
    console.log(this.state.carrinho)
    
    return (
      <>
      <Header />
      <Container>
        <p>Labe-Brinquedos</p>

        <Produtos produtos={products} adicionarCarrinho={this.adicionarCarrinho} />

      </Container>
      </>
    );
  }
}
  

export default App;
