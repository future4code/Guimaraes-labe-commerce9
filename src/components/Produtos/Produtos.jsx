import React from "react";
import CardDeProdutos from "./CardDeProdutos";
import styled from "styled-components";



const PrincipalDiv = styled.div `
display: flex;
flex-grow: 3;
align-self: stretch;
justify-content: center;
`
const SecudariaDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 30px;
margin:30px;


`



const ProdutosInt = styled.div`
  margin: 1em 0.5em;
  display: grid;
  grid-template: 1fr 1fr / repeat(4, 1fr);
  gap: 2em;

`


class Produtos extends React.Component{




    render() {

        return (
            <PrincipalDiv>
                <SecudariaDiv>
                <div>
                <p>Produtos</p>
                <label>
              {" "}
              Pesquisa:
              <select>
                <option>Crescente</option>
                <option>Decrescente</option>
              </select>
            </label>
                </div>
                <ProdutosInt>
                    { this.props.produtos.map((produto, index) => {
                        return (
                        <CardDeProdutos
                        adicionarCarrinho={this.props.adicionarCarrinho}
                        produto={produto}
                        key={index} />
                        )
                    })}
                </ProdutosInt>
                </SecudariaDiv>
            </PrincipalDiv>

        )
    }
}
export default Produtos;
