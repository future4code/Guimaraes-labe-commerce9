import React from "react";
import styled, { keyframes } from "styled-components";
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineToys } from 'react-icons/md'
import { RiTShirt2Line } from 'react-icons/ri'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const NavAnimation = keyframes`
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(0%);
    }
`

const BackgroundAnimation = keyframes`
    from {
        filter: opacity(0%)
    }

    to {
        filter: opacity(100%)
    }
`

const Container = styled.div`
    height: 100vh;
    width: 40vw;
    margin-top: 4.3rem;
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
    margin-top: 4.3rem;
    position: fixed;
    background-color: #0000007f;
    z-index: 1;
    visibility: ${props => !props.navMenu ? "hidden" : "initial"};
`

const HeaderNav = ({ navMenu, openMenu }) => {
    return (
        <>
        <Background navMenu={navMenu} onClick={openMenu} />
        <Container navMenu={navMenu} >
            <ContainerItems>
                <a href="">
                    <div>
                        <AiOutlineHome />
                        <span>Página Inicial</span>
                    </div>
                </a>
                <a href="">
                    <div>
                        <MdOutlineToys />
                        <span>Brinquedos</span>
                    </div>
                </a>
                <a href="">
                    <div>
                        <RiTShirt2Line />
                        <span>Camisetas</span>
                    </div>
                </a>
                <a href="">
                    <div>
                        <AiOutlineShoppingCart />
                        <span>Carrinho</span>
                    </div>
                </a>
            </ContainerItems>
        </Container>
        </>
    )
}

export default HeaderNav