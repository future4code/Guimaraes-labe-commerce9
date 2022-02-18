import React from "react";
import styled from "styled-components";
import toyLista from ""

class CardDeProdutos extends React.Component{

    render(){
        
        return (
            <div>


                <div>
                    <img src={this.props.imageUrl}/>
                    <div> Valor R$ {this.props.value}</div>
                    <div>{this.props.nome}</div>
                    <button onClick={() => this.props.adicionarCarrinho (this.props.id)}> Adicionar ao carrinho</button>
                </div>  


            </div>


        )
    }
}
export default CardDeProdutos;