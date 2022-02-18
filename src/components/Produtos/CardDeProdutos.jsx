import React from "react";

class CardDeProdutos extends React.Component{

    render(){
        
        return (
            <div>


                <div>
                    <img src={this.props.produto.imageUrl} alt={this.props.produto.nome} />
                    <div> Valor R$ {this.props.produto.value}</div>
                    <div>{this.props.produto.nome}</div>
                    <button onClick={() => this.props.adicionarCarrinho(this.props.produto)}> Adicionar ao carrinho</button>
                </div>


            </div>


        )
    }
}
export default CardDeProdutos;