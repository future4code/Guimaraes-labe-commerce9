import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width: 40vw;
    margin-top: 4.3rem;
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

    button {

    }
`

const Background = styled.div`
    height: 100vh;
    width: 100vw;
    margin-top: 4.3rem;
    position: fixed;
    background-color: #0000007f;
    z-index: 1;
    visibility: ${props => !props.shopMenu ? "hidden" : "initial"};
`

const HeaderShop = ({ shopMenu, openShop }) => {
    return (
        <>
        <Background shopMenu={shopMenu} onClick={openShop} />
        <Container shopMenu={shopMenu} >
            <ContainerItems>
                <div>
                </div>
                <button>Ir para o carrinho</button>
            </ContainerItems>
        </Container>
        </>
    )
}

export default HeaderShop