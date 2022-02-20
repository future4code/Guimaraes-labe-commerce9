import React from 'react';
import './App.css';
import toysProducts from './data/toys.json'
import shirtsProducts from './data/shirts.json'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Brinquedos from './pages/Brinquedos';
import Camisetas from './pages/Camisetas';

class App extends React.Component{

  state = {
    carrinho: [],
    navMenu: false,
    shopMenu: false,
    page: 'home',
    toys: toysProducts,
    shirts: shirtsProducts,
    toysDisplay: toysProducts,
    shirtsDisplay: shirtsProducts,
  }

  openNav = () => {
    if (this.state.shopMenu) {
      this.setState({shopMenu: false})
    }

    this.setState({navMenu: !this.state.navMenu})
  }

  openShop = () => {
    if (this.state.navMenu) {
      this.setState({navMenu: false})
    }

    this.setState({shopMenu: !this.state.shopMenu})
  }
  
  changePage = (currentPage) => {
    this.setState({page: currentPage})
    this.setState({toysDisplay: this.state.toysDisplay.sort((a, b) => a.id - b.id)})
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

  searchProducts = (search) => {
    const newToys = this.state.toys.filter((item) => {
      if (search === "") {
        return this.state.toys
      } else {
        return item.nome.toLowerCase().includes(search.toLowerCase())
      }
    })

    this.setState({toysDisplay: newToys})
  }

  sortProducts = (sort) => {
    if (sort === "crescente") {
      this.setState({toysDisplay: this.state.toysDisplay.sort((a, b) => b.value - a.value)})
    } else if (sort === "decrescente") {
      this.setState({toysDisplay: this.state.toysDisplay.sort((a, b) => a.value - b.value)})
    } else {
      this.setState({toysDisplay: this.state.toysDisplay.sort((a, b) => a.id - b.id)})
    }
  }

  searchProductsShirts = (search) => {
    const newShirts = this.state.shirts.filter((item) => {
      if (search === "") {
        return this.state.shirts
      } else {
        return item.nome.toLowerCase().includes(search.toLowerCase())
      }
    })

    this.setState({shirtsDisplay: newShirts})
  }

  sortProductsShirts = (sort) => {
    if (sort === "crescente") {
      this.setState({shirtsDisplay: this.state.shirtsDisplay.sort((a, b) => b.value - a.value)})
    } else if (sort === "decrescente") {
      this.setState({shirtsDisplay: this.state.shirtsDisplay.sort((a, b) => a.value - b.value)})
    } else {
      this.setState({shirtsDisplay: this.state.shirtsDisplay.sort((a, b) => a.id - b.id)})
    }
  }
  

  render() {
    const navInfo = {
      navMenu: this.state.navMenu,
      openNav: this.openNav,
      shopMenu: this.state.shopMenu,
      openShop: this.openShop,
    }

    const currentPage = () => {
      if (this.state.page === "home") {
        return (
          <Home
            toys={this.state.toys}
            shirts={this.state.shirts}
            adicionarCarrinho={this.adicionarCarrinho}
            openShop={navInfo.openShop}
            changePage={this.changePage}
          />
        )
      } else if (this.state.page === "brinquedos") {
        return (
          <Brinquedos
            produtos={this.state.toysDisplay}
            adicionarCarrinho={this.adicionarCarrinho}
            openShop={navInfo.openShop}
            searchProducts={this.searchProducts}
            sortProcuts={this.sortProducts}
          />
        )
      } else {
        return (
          <Camisetas
            produtos={this.state.shirtsDisplay}
            adicionarCarrinho={this.adicionarCarrinho}
            openShop={navInfo.openShop}
            searchProducts={this.searchProductsShirts}
            sortProcuts={this.sortProductsShirts}
          />
        )
      }
    }
    
    return (
      <>
      <Header carrinho={this.state.carrinho} removerCarrinho={this.removerCarrinho} navInfo={navInfo} changePage={this.changePage} />
      {currentPage()}
      <Footer />
      </>
    );
  }
}
  

export default App;
