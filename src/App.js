import React from 'react';
import './App.css';
import Produtos from './componetes/Produtos/Produtos';

const produtos = [

  { id: 1,
    nome: 'Arma',
    value: 150.00,
    imageUrl: "https://i.ibb.co/9h25HKP/arma.jpg"
  },

  {
    id: 2,
    nome: ' Ioda',
    value : 559.00,
    imageUrl: 'https://i.ibb.co/5GSxrSy/BONECO1.jpg'
  },

  {
    id: 3,
    nome: 'FURBACCA',
    value: 799.00,
    imageUrl: 'https://i.ibb.co/MctrwRh/FURBACCA.jpg'
  },

  {
    id: 4,
    nome: 'HASBRO',
    value: 999.00,
    imageUrl: 'https://i.ibb.co/Lp8sBSw/HASBRO.jpg'
  },

  {
    id: 5,
    nome:'Mascara',
    value: 250.00,
    imageUrl: 'https://i.ibb.co/wrsJ8ny/MASCARA.jpg'
  },

  {
    id: 6,
    nome: 'NAVE X',
    value: 1593.00,
    imageUrl:'https://i.ibb.co/ctt26YN/NAVE-X.jpg'
  },

  {
    id: 7,
    nome: 'Strormtroope',
    value: 450.00,
    imageUrl:'https://i.ibb.co/WDscf5T/STORMTROOPE.jpg'
  },

  {
    id: 8,
    nome: 'DARTH VADER',
    value: 899.00,
    imageUrl: 'https://i.ibb.co/6PMyVgc/DARTH-VADER.jpg'
  }

]

class App extends React.Component{

  state = {

    carrinho: [
      {
      id: '',
      nome: '',
      value: '',
      imageUrl:'',
      quantidade:''
      }
    ]
  }  
  

  render() {
    return (
      <Produtos produtos={produtos} />
    );
  }
}
  

export default App;
