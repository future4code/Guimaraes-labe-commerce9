import React from "react";
import styled from "styled-components";

const CardPrincipal = styled.div`
box-shadow: #223b604c 0px 1px 2px 0px, #223b6032 0px 2px 6px 2px;
padding: 0.4em 0;
display: grid;
grid-template-columns: 1fr -1fr 1fr;
text-align: center;
border-radius: 10px;


div {
    padding: 5px;
}

.name {
    font-size: 1.25rem;
    font-weight: bold;
}

.price {
    color: green;
}

`
const BotaoProduto = styled.button`
display: inline-block;
padding: 0.9em 1.6em;
border: 0.1em solid #ffffff;
border-radius: 0.12em;
box-sizing: boarder-box;
text-decoration: none;
font-family: "Roboto", sans-serif;
font-weight: 300;
color: #ffffff;
text-align: center;
transition: all 0.2s;
background-color: #223B60;
border-radius: 20px;
font-family: 'Ruda', sans-serif;
width: 90%;
margin: 0 auto;
margin-top: 3px;
margin-bottom: 5px;

&:hover{
    color: #223B60;
    border: 0.1em solid #223B60;
    background-color: #ffffff
}

`

const ImgPrincipal = styled.img`
margin: 0 auto;
height: 150px;
display: flex;
flex-direction: columns;
justify-content: center;
align-items: center;


`



class CardDeProdutos extends React.Component{

    render(){
        const handleClick = () => {
            this.props.adicionarCarrinho(this.props.produto)
            this.props.openShop()
        }

        const truncateString = (str, num) => {
            if (str.length <= num) {
              return str
            }
            return str.slice(0, num) + '...'
          }
        
        return (
            <div>
                <CardPrincipal>
                    <ImgPrincipal src={this.props.produto.imageUrl} alt={this.props.produto.nome} />
                    <div className="name">{truncateString(this.props.produto.nome, 25)}</div>
                    <div className="price"> Valor R$ {this.props.produto.value.toFixed(2)}</div>
                    <BotaoProduto onClick={handleClick}> Adicionar ao carrinho</BotaoProduto>
                </CardPrincipal>
            </div>


        )
    }
}

export default CardDeProdutos;