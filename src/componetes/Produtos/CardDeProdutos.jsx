import React from "react";
import styled from "styled-components";
import Produtos from "./Produtos";





class CardDeProdutos extends React.Component{

    render(){

        const produto = this.props.produtos;
        return (
            <div>

                <div>
                    < img src={produtos.imageUrl}/>
                    <div> Valor R$ {produtos.valeu}</div>
                    <div>{produtos.nome}</div>
                    <button onClick={() => this.props.adicionarCarrinho (produtos.id)}> Adicionar ao carrinho</button>
                    
                    </div>    


            </div>


        )
    }
}
export default CardDeProdutos;