import React from "react";
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
                    { this.props.produtos.map((produto, index) => {
                        return (
                        <CardDeProdutos
                        adicionarCarrinho={this.props.adicionarCarrinho}
                        produto={produto}
                        key={index} />
                        )
                    })}
                </div>
            </div>

        )
    }
}
export default Produtos;
