import React from "react";
import styled from "styled-components";

const CardPrincipal = styled.div`
box-shadow: 2px 2px 4px rgba(136, 34, 136, 1);
padding: 0.4em 0;



`
const BotaoProduto = styled.button`
display: inline-block;
padding: 0.35em 1.2em;
border: 0.1em solid blue;
margin: 0.2em 0.3em;
border-radius: 0.12em;
box-sizing: boarder-box;
text-decoration: none;
font-family: "Roboto", sans-serif;
font-weight: 300,
color: blue;
text-align: center;
transition: all 0.2s;
backgraund-color: rgb(136, 34, 136);
&:hover{
    color: rgb(136, 34,136);
    border: 0.1em solid rgb(136, 34, 136);
    backgraund-color: blue
}

`
const ImgPrincipal = styled.img`
height: 200px;
width : 200px;
display: flex;
flex-directin:columns;
justify-content: center;
align-itens: center;


`



class CardDeProdutos extends React.Component{

    render(){
        
        return (
            <div>


                <CardPrincipal>
                    <ImgPrincipal src={this.props.produto.imageUrl} alt={this.props.produto.nome} />
                    <div> Valor R$ {this.props.produto.value}</div>
                    <div>{this.props.produto.nome}</div>
                    <BotaoProduto onClick={() => this.props.adicionarCarrinho(this.props.produto)}> Adicionar ao carrinho</BotaoProduto>
                </CardPrincipal>


            </div>


        )
    }
}
export default CardDeProdutos;