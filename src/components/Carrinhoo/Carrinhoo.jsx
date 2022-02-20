import React from 'react';
import styled from 'styled-components';


const CarrinhooStyle = styled.div`
width: 20vw;
height: 100vh;
background: rgba(102, 213, 241, 0.678);
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
border-radius:5px;
padding: 30px;
margin:10px
padding-top:30px;
`;


class Carrinhoo extends React.Component {
    render() {
        return (
            <div>
                 <CarrinhooStyle>
          <div className="carrinho-compras">
            <h2>Meus Pedidos</h2>
            <br></br>
            <div className="tabela-produtos">
              <p>PRODUTO</p>
              <p>SUBTOTAL</p>
            </div>

           

            <br></br>
            <div className="total-compra">
              <h2>TOTAL</h2>
              <h2>R$ ,00</h2>
            </div>
            <br></br>
            <button className="Finalizar">Finalizar Compra</button>
          </div>
          </CarrinhooStyle>
            </div>
        );
    }
}


export default Carrinhoo;