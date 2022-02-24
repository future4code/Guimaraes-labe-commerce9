import React from "react";
import styled from "styled-components";
import HeaderShopContainer from "./HeaderShopContainer";

const Container = styled.div`
    height: calc(100vh - 87px);
    width: 40vw;
    position: fixed;
    background-color: #f1f1f1;
    z-index: 2;
    display: flex;
    justify-content: center;
    right: 0;
    transform: ${props => !props.shopMenu ? "translateX(100%)" : "translateX(0%)"};
    transition: transform 0.5s ease;

    @media (max-width: 800px) {
        width: 100vw;
    }
`

const ContainerItems = styled.div`
    width: 100%;
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    div {
        width: 100%;
    }

    button {
        width: 90%;
        padding: 5% 6%;
        border-radius: 20px;
        border: none;
        background-color: #223B60;
        color: white;
        font-size: 1rem;
        border: 3px solid #223B60;
        transition: background-color 0.5s ease;
        font-weight: bold;

        :hover {
            background-color: #f1f1f1;
            color: #223B60;
            transition: color 0.3s ease;
        }
    }

    .carrinhoTotal {
        width: 90%;
        background-color: #ebebeb;
        border-radius: 0px 0px 20px 20px;
        margin-bottom: 1.5rem;
        padding: 1rem;

        h4 {
            margin: 0;
            text-align: center;
            font-size: 1.1rem;
            padding: 0;
            color: green;
        }
    }

    .shopContainer {
        height: 100%;
        width: 90%;
        margin-top: 1rem;
        background-color: #ebebeb;
        border-radius: 20px 20px 0px 0px;
        padding: 1rem 1rem 0rem 1rem;
        overflow-y: auto;
    }
`

const Background = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: #0000007f;
    z-index: 1;
    visibility: ${props => !props.shopMenu ? "hidden" : "initial"};
`

const HeaderShop = ({ shopMenu, openShop, carrinho, removerCarrinho }) => {
    return (
        <>
        <Background shopMenu={shopMenu} onClick={openShop} />
        <Container shopMenu={shopMenu} >
            <ContainerItems>
                <div className="shopContainer">
                    <HeaderShopContainer carrinho={carrinho} removerCarrinho={removerCarrinho} />
                </div>
                <div className="carrinhoTotal">
                    <h4>Total: R$ {carrinho.reduce((a, b) => a + (b.value * b.quantidade), 0).toFixed(2)}</h4>
                </div>
                <button>Finalizar compra</button>
            </ContainerItems>
        </Container>
        </>
    )
}

export default HeaderShop