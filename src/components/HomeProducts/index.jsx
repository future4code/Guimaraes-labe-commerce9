import React, { useState } from "react";
import styled from "styled-components";
import CardDeProdutos from "../CardDeProdutos";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { MdOutlineCircle, MdCircle } from 'react-icons/md'

const Info = styled.div`
    display: flex;
    align-items: center;
    margin-left: 4rem;

    @media (max-width: 1300px) {
        margin-left: 1rem;
        
    }

    > * {
        margin: 1rem 0.5rem;
    }

    h2 {
        font-size: 30px;
        color: #223B60;
        text-transform: uppercase;
    }

    button {
        height: 30px;
        padding: 5px 10px;
        border-radius: 0.12em;
        font-family: 'Ruda', sans-serif;
        border: 1px solid #223B60;
        background-color: white;
        color: #223B60;
        border-radius: 20px;
        transition: all 0.2s;
        font-size: 13px;

        &:hover{
            color: white;
            background-color: #223B60
        }
    }
`

const Container = styled.div`
    display: flex;
    align-items: center;
    margin: 0rem 1rem;

    svg {
        font-size: 115px;
        color: #223B60;
        cursor: pointer;
        padding: 5px;

        @media (max-width: 1300px) {
        display: none;
        }
    }
`

const ProductDisplay = styled.div`
    display: flex;
    margin: 0 auto;
    padding: 0rem;
    margin-left: 1rem;
    margin-right: 1rem;
    transform: ${props => props.stageConverted};
    transition: transform 0.45s;

    > div {
        min-width: 200px;
        margin: 10px;
    }
`

const Slide = styled.div`
    overflow-x: hidden;

    @media (max-width: 1300px) {
        overflow-x: auto;
    }
`

const Circles = styled.div`
    width: 100%;
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;

    @media (max-width: 1300px) {
        display: none;
    }

    svg {
        color: #223B60;
        margin: 0 2px;
        font-size: 15px;
        cursor: pointer;
    }
`

const HomeProducts = ({ produtos, adicionarCarrinho, openShop, title, changePage }) => {
    const [stage, setStage] = useState(1)

    const handleClickLeft = () => {
        if (stage === 1) {
            setStage(1)
        } else {
            setStage(stage - 1)
        }
    }

    const handleClickRight = () => {
        if (stage === 3) {
            setStage(3)
        } else {
            setStage(stage + 1)
        }
    }

    const converstion = () => {
        if (stage === 1) {
            return "translateX(0px)"
        } else if (stage === 2) {
            return "translateX(-1115px)"
        } else if (stage === 3) {
            return "translateX(-2200px)"
        }
    }

    const firstCircle = () => {
        if (stage === 1) {
            return (
                <MdCircle />
            )
        } else {
            return (
                <MdOutlineCircle onClick={() => setStage(1)} />
            )
        }
    }

    const secondCircle = () => {
        if (stage === 2) {
            return (
                <MdCircle />
            )
        } else {
            return (
                <MdOutlineCircle onClick={() => setStage(2)} />
            )
        }
    }

    const thirdCircle = () => {
        if (stage === 3) {
            return (
                <MdCircle />
            )
        } else {
            return (
                <MdOutlineCircle onClick={() => setStage(3)} />
            )
        }
    }

    return (
        <>
        <Info>
            <h2>{title}</h2>
            <button onClick={() => changePage(title)}>Ver todos</button>
        </Info>
        <Container>
            <BsFillArrowLeftCircleFill onClick={handleClickLeft} />
            <Slide>
                <ProductDisplay stageConverted={converstion} >
                        {produtos.map((item, index) => {
                            return (
                                <CardDeProdutos
                                adicionarCarrinho={adicionarCarrinho}
                                produto={item}
                                key={index}
                                openShop={openShop} />
                            )
                        })}
                </ProductDisplay>
            </Slide>
            <BsFillArrowRightCircleFill onClick={handleClickRight} />
        </Container>
        <Circles>
            {firstCircle()}
            {secondCircle()}
            {thirdCircle()}
        </Circles>
        </>
    )
}

export default HomeProducts