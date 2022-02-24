import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 250px;
    background-color: #f0f0f0;
    margin-top: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
`
const PrincipalFooter = styled.div `
display: flex;
flex-direction: row;
justify-content: space-around;
align-itens: center;
backgraund-color: rgb(136, 34, 136);
color: #223B60;
font-size: 15px;
:hover {
    background-color: #f1f1f1;
    color: #223B60;
    transition: color 0.3s ease;
}
padding: 10px;
margin: 20px;


`


const Footer = () => {
    return (
        <Container>
                    <PrincipalFooter>Institucional</PrincipalFooter>
                    <PrincipalFooter>Sobre a LOGO</PrincipalFooter>
                    <PrincipalFooter>Compre pelo Delivery</PrincipalFooter>
        </Container>
    )
}

export default Footer