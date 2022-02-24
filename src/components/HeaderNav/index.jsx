import React from "react";
import styled from "styled-components";
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineToys } from 'react-icons/md'
import { RiTShirt2Line } from 'react-icons/ri'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Container = styled.div`
    height: calc(100vh - 87px);
    width: 40vw;
    position: fixed;
    background-color: #f1f1f1;
    z-index: 2;
    display: flex;
    justify-content: center;
    transform: ${props => !props.navMenu ? "translateX(-100%)" : "translateX(0%)"};
    transition: transform 0.5s ease;

    @media (max-width: 800px) {
        width: 100vw;
    }
`

const ContainerItems = styled.div`
    width: 100%;

    a {
        text-decoration: none;
        color: black;
    }

    div {
        text-align: center;
        padding: 1.75rem 0rem;
        width: 100%;
        border-bottom: 1px solid #223B60;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: color 0.1s;

        :hover {
            background-color: #223b60ce;
            color: white;
            transition: background-color 0.333s ease;
        }

        svg {
            font-size: 25px;
            margin-right: 10px;
        }

        span {
            font-size: 20px;
            text-decoration: none;
        }
    }
`

const Background = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: #0000007f;
    z-index: 1;
    visibility: ${props => !props.navMenu ? "hidden" : "initial"};
`

const HeaderNav = ({ navMenu, openMenu, changePage }) => {
    const handleClick = (page) => {
        changePage(page)
        openMenu()
    }

    return (
        <>
        <Background navMenu={navMenu} onClick={openMenu} />
        <Container navMenu={navMenu} >
            <ContainerItems>
                    <div onClick={() => handleClick("home")}>
                        <AiOutlineHome />
                        <span>Página Inicial</span>
                    </div>
                    <div onClick={() => handleClick("brinquedos")}>
                        <MdOutlineToys />
                        <span>Brinquedos</span>
                    </div>
                    <div onClick={() => handleClick("camisetas")}>
                        <RiTShirt2Line />
                        <span>Camisetas</span>
                    </div>
                    <div>
                        <AiOutlineShoppingCart />
                        <span>Carrinho</span>
                    </div>
            </ContainerItems>
        </Container>
        </>
    )
}

export default HeaderNav