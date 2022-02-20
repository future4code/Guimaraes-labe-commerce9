import React from 'react';
import CardDePrdutos from './components/Produtos/CardDeProdutos'



class CarrinhoItem extends React.Component {
  state = {
    valorContador: 1
  }

  onClickSoma = () => {

    const valorAtual = this.state.valorContador
    const valorFinal = valorAtual + 1

    this.setState({ valorContador: valorFinal })
  }

  onClickSubtrai = () => {
    const valorAtual = this.state.valorContador
    const valorFinal = valorAtual - 1

    this.setState({ valorContador: valorFinal })
  }

 ValorTotal = () => {
    let ValorTotal =  this.props.CardDeProdutos.valor * this.state.valorContador

    return ValorTotal
  }

  render() {
   
        return(
          <div>
          <ProdutoCarrinhoo>
    
          <div className="tabela-produtos">
    
          <div className="Imagem">{this.props.CardDeProdutos.foto}</div>
    
          <div className="Descricao">
          <p>{this.props.CardDeProdutos.item}</p>
          <p>{this.props.CardDeProdutos.valor}</p><p>
          <button className="BotaoContador" type="button" onClick={this.onClickSubtrai}> - </button>  
          {this.state.valorContador} <button className="BotaoContador" onClick={this.onClickSoma}>+</button> </p>
          </div>
            </div>
            
        <div className="total-compra">
              <h2>R${this.ValorTotal()},00</h2>
              <button 
            onClick={() => this.props.onRemoveProductFromCart(this.props.cartItem.id)}
          >
            <img className="IconeExcluir" src="https://icons.iconarchive.com/icons/custom-icon-design/mono-general-4/24/trash-icon.png"/>
          </button> </div>
        
            </ProdutoCarrinhoo>
            </div>
        ); 
  }  

  
}

export default CarrinhoItem
