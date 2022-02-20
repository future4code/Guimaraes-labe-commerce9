import React from 'react';
import styled from 'styled-components'




const FilterStyle = styled.div `
width: 20vw;
height: 40vh;
background: rgba(102, 213, 241, 0.678);
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
border-radius:5px;
padding: 30px;
margin:10px
padding-top:30px;
display: flex;
justify-content: space-between;
`


const InputText = styled.input `
  background: #eaeaf5;
  border: none;
  border-radius:5px;
`

const ButtonFiltros = styled.button `
    width: 12vw;
    height: 6vh;
    background: #eaeaf5;
    color: #414141;
    border: none;
    font-size: 15px;
    margin: 10px;
    &:hover{
      background: #414141;
      color: #66d5f1;
    }
`


class Filtro extends React.Component {
    state ={
        minPrice:"",
        maxPrice:"",
    }

    updateMinPrice=(e) => {
        this.setState({minPrice:e.target.value})
    }

    updateMaxPrice=(e) => {
        this.setState({maxPrice:e.target.value})
    }

    render() {
        return (
            <FilterStyle>
                < div className="filter-container">
                    <h2>Filtros</h2>
                    <p>Valor máximo:</p>
                    <InputText type="text" placeholder="R$ 0,00" value={this.state.minPrice} onChange={this.updateMinPrice}/>
                    <p>Valor mínimo:</p>
                    <InputText type="value" placeholder="R$ 0,00" value={this.state.maxPrice} onChange={this.updateMaxPrice}/>
                    <ButtonFiltros>Aplicar filtros</ButtonFiltros>

                </div>

            </FilterStyle>




        );
    }



}


export default Filtro;