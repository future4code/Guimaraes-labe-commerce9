import React from 'react';
import styled from 'styled-components';


const PrincipalFooter = styled.div `
display: flex;
flex-direction: row;
justify-content: space-around;
align-itens: center;
backgraund-color: rgb(136, 34, 136);
color: #223B60;
font-size: 15px;
&:hover{
    color: rgb(136, 34,136);
    border: 0.1em solid rgb(136, 34, 136);
    backgraund-color: blue
}
padding: 10px;
margin: 20px;


`
const FinalFooter = styled.h3` 

display:flex;
flex-direction:row;
justify-content: center;
color: #223B60;
font-size: 10px

`







class Rodape extends React.Component{

    render(){

        return(

            <div>
            <PrincipalFooter>

                    <h3>Institucional</h3>
                    <h3>Sobre a LOGO</h3>
                    <h3>Compre pelo Delivery</h3>
                

            </PrincipalFooter>
            <br/>
                <FinalFooter>Produzido :Francineide , Júcelia e Lucas </FinalFooter>
            </div>
        )

    }
}
export default Rodape;