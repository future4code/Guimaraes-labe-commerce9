import React, { useState } from "react";
import styled from 'styled-components';
import ProductsContainer from "../components/ProcutsContainer";
import { AiOutlineSearch } from 'react-icons/ai'

const Container = styled.div`
    max-width: 1250px;
    margin: 0 auto;
    
    h1 {
        text-align: center;
        padding-top: 2rem;
        padding-bottom: 0.5rem;
        color: #223B60;
        text-transform: uppercase;
    }
`

const Filters = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;

    @media (max-width: 1300px) {
        flex-direction: column-reverse;
    }

    label {
        position: absolute;
        margin-right: 850px;

        @media (max-width: 1300px) {
            position: relative;
            margin-right: 0rem;
        }
    }

    .search {
        width: 40%; 
        display: flex;
        align-items: center;

        @media (max-width: 1300px) {
            width: 90%;
            margin-bottom: 20px;
        }

        svg {
            font-size: 1.5rem;
            padding: 8px;
        }
    }

    input {
    box-sizing: border-box;
    font-family: 'Ruda';
    font-size: 14px;
    vertical-align: baseline;
    font-weight: 400;
    line-height: 1.29;
    letter-spacing: .16px;
    border-radius: 0;
    outline: 2px solid transparent;
    outline-offset: -2px;
    width: 90%;
    height: 40px;
    border: none;
    border-bottom: 1px solid #8d8d8d;
    background-color: none;
    padding: 0 16px;
    color: #161616;
    transition: background-color 0.2s ease;
    border-radius: 5px 5px 0px 0px;

    :focus{
        background-color: #f4f4f4;
        outline: none;
        border-bottom: 1px solid #223B60;
        transition: border-bottom 0.4s;
    }
}
`

const Brinquedos = ({ produtos, adicionarCarrinho, openShop, searchProducts, sortProcuts}) => {
    const [userInput, setUserInput] = useState("")
    const [selectInput, setSelectInput] = useState("")

    const handleChange = (e) => {
        setUserInput(e.target.value)
        searchProducts(e.target.value)
    }

    const handleSelect = (e) => {
        setSelectInput(e.target.value)
        sortProcuts(e.target.value)
    }

    return (
        <Container>
            <h1>Brinquedos</h1>
            <Filters>
                <label>
                    Ordenação Preço:
                    <select value={selectInput} onChange={handleSelect}>
                        <option value="">Nenhum</option>
                        <option value="decrescente"> Menor</option>
                        <option value="crescente"> Maior </option>
                    </select>
                </label>
                <div className="search">
                    <AiOutlineSearch />
                    <input
                        placeholder="Digite o nome do produto"
                        value={userInput}
                        onChange={handleChange}
                    />
                </div>
            </Filters>
            <ProductsContainer produtos={produtos} adicionarCarrinho={adicionarCarrinho} openShop={openShop} />
        </Container>
    )
}

export default Brinquedos