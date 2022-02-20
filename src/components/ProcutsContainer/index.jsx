import React from "react";
import styled from "styled-components";
import CardDeProdutos from "../CardDeProdutos";

const ToysContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 0rem 2rem;
    justify-content: center;

    > div {
        flex: 1 1 200px;
        margin: 10px;

        @media (min-width: 800px) {
            max-width: 200px;
        }
    }
`

const ProductsContainer = ({ produtos, adicionarCarrinho, openShop}) => {
    return (
        <ToysContainer>
                {produtos.map((item, index) => {
                    return (
                        <CardDeProdutos
                        adicionarCarrinho={adicionarCarrinho}
                        produto={item}
                        key={index}
                        openShop={openShop} />
                    )
                })}
        </ToysContainer>
    )
}

export default ProductsContainer