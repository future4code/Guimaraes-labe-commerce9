import React from "react";
import styled from "styled-components";
import CardDeProdutos from "./CardDeProdutos";




class Produtos extends React.Component{

    render() {

        return (
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
            
                <div>
                    { this.props.produtos.map((produto) => {
                        return (
                        <CardDeProdutos
                        id={produto.id}
                        nome={produto.nome}
                        value={produto.value}
                        imageURL={produto.imageURL} />
                        )
                    })}
                </div>
            </div>

        )
    }
}
export default Produtos;
