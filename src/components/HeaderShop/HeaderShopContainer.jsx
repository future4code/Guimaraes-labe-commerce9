import React from "react";
import styled from "styled-components";
import { BiTrash } from 'react-icons/bi'

const Container = styled.div`
`

const CartItem = styled.div`
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin-bottom: 0.666rem;

    .esquerda {
        display: flex;

        img {
            height: 5rem;
            padding: 0.5rem;
        }

        h5 {
            font-size: 20px;
            padding: 0;
            margin: 0;
            word-wrap: wrap;
            word-break: break-all;
            text-align: center;
        }

        span {
            text-align: center;
            font-size: 15px;
        }

        .preco {
            color: green;
        }

        .qntd {
            font-size: 15px;
        }

        .info {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            padding: 1rem 0rem;
        }
    }

    .quantidade {
        width: 70px;
        text-align: center;

        svg {
            font-size: 25px;
            color: #223B60;

            :hover {
                color: red;
                transition: color 0.4s ease;
            }
        }
    }
`

const ImageContainer = styled.div`
    width: 200px;
    height: 100px;
    display: flex;
    justify-content: center;

    img {
        height: 100%;
    }
`

const HeaderShopContainer = ({ carrinho, removerCarrinho }) => {
    return (
        <Container>
            {carrinho.map((item) => {
                return (
                    <CartItem>
                        <div className="esquerda">
                            <img src={item.imageUrl} alt={item.nome} />
                            <div className="info">
                                <h5>{item.nome}</h5>
                                <span className="qntd">Qntd: {item.quantidade}</span>
                                <span className="preco">Preço: R$ {(item.value * item.quantidade).toFixed(2)}</span>
                            </div>
                        </div>
                        <div className="quantidade">
                            <BiTrash onClick={() => removerCarrinho(item)} />
                        </div>
                    </CartItem>
                )
            })}
        </Container>
    )
}

export default HeaderShopContainer