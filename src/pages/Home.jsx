import React from 'react';
import styled from 'styled-components';
import HomeProducts from '../components/HomeProducts';

const Container = styled.div`
  padding-top: 15px;
  max-width: 1250px;
  margin: 0 auto;
`

const Banner = styled.div`
  width: 95%;
  margin: 0 auto;
  height: 250px;
  border-radius: 25px;
  background-color: black;
  display: flex;
  justify-content: center;

  @media (max-width: 1300px) {
    display: none;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 25px;
    box-shadow: inset rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`

const Home = ({ toys, shirts, adicionarCarrinho, openShop, changePage }) => {
  return (
    <Container>
      <Banner>
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5298bac0-b8bf-4c80-af67-725c1272dbb0/dcbrky3-d4685ae4-a280-40ab-a56f-8c93c5eea8d9.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUyOThiYWMwLWI4YmYtNGM4MC1hZjY3LTcyNWMxMjcyZGJiMFwvZGNicmt5My1kNDY4NWFlNC1hMjgwLTQwYWItYTU2Zi04YzkzYzVlZWE4ZDkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5A7ZNgOZNnctFrT9QNhuYLnqAv93XJ5Q2Uxp0Jz55C4" alt="Star Wars Banner" />
      </Banner>
      <HomeProducts
        title={"brinquedos"}
        produtos={toys}
        adicionarCarrinho={adicionarCarrinho}
        openShop={openShop}
        changePage={changePage}
      />
      <HomeProducts
        title={"camisetas"}
        produtos={shirts}
        adicionarCarrinho={adicionarCarrinho}
        openShop={openShop}
        changePage={changePage}
      />
    </Container>
  )
}

export default Home