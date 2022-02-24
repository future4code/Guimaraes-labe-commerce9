import React from "react";
import styled from "styled-components";
import { HiMenu } from 'react-icons/hi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import HeaderNav from "../HeaderNav";
import HeaderShop from "../HeaderShop";

const Container = styled.header`
    background-color: white;
    width: 100%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    z-index: 3;
    position: fixed;
    top: 0;
`

const ContainerItems = styled.div`
    margin: 0 auto;
    padding: 1rem 2rem;
    max-width: 1250px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        cursor: pointer;

        h2 {
            font-size: 40px;
            padding: 0;
            margin: 0;
            color: #223B60;
        }

        svg {
            font-size: 50px;
            color: #223B60;
        }
    }
`

const Header = ({ carrinho, removerCarrinho, navInfo, changePage }) => {
    return (
        <>
        <Container>
            <ContainerItems>
                <div onClick={navInfo.openNav}>
                    <HiMenu />
                </div>
                <div>
                    <h2>LOGO</h2>
                </div>
                <div onClick={navInfo.openShop}>
                    <AiOutlineShoppingCart />
                </div>
            </ContainerItems>
        </Container>
        <HeaderNav navMenu={navInfo.navMenu} openMenu={navInfo.openNav} changePage={changePage} />
        <HeaderShop shopMenu={navInfo.shopMenu} openShop={navInfo.openShop} carrinho={carrinho} removerCarrinho={removerCarrinho} />
        </>
    )
}

export default Header