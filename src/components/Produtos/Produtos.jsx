import React from "react";
import CardDeProdutos from "./CardDeProdutos";
import styled from "styled-components";



const PrincipalDiv = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`
const SecudariaDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  align-self: stretch;

`

const GridDeProdutos = styled.div`
  margin: 1em 0.5em;
  display: grid;
  grid-template: 1fr 1fr / repeat(4, 1fr);
  gap: 0.5em;

`


class Produtos extends React.Component{




    render() {

        return (
            <PrincipalDiv>
                <SecudariaDiv>
                <div>
                <p>Produtos</p>
                <label>
                    { " "}
                    Ordenação:
                    <select>
                        <option> Crescente </option>
                        <option> Decrescente</option>
                    </select>
                </label>
                </div>
                <GridDeProdutos>
                    { this.props.produtos.map((produto, index) => {
                        return (
                        <CardDeProdutos
                        adicionarCarrinho={this.props.adicionarCarrinho}
                        produto={produto}
                        key={index} />
                        )
                    })}
                </GridDeProdutos>
                </SecudariaDiv>
            </PrincipalDiv>

        )
    }
}
export default Produtos;
