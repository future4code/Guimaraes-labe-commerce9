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
                { this.props.produto.map((produtos) => {
                    return(
                       <CardDeProdutos
                       produtos ={produtos}
                       adicionarCarrinho ={this.props.adicionarCarrinho}/>
                    )
                }
                
                )}
            </div>
            </div>

        )
    }
}
export default Produtos;
