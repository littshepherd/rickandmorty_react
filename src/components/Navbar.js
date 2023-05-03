import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <>
        <NavContainer>
            <h2>Rick <span>&</span> Morty <span>Proyecto</span></h2>
            <div>
              <a href='/'>Inicio</a>
              <a href='/'>Personajes</a>
              <a href='/'>Capitulos</a>
            </div>
        </NavContainer>
    </>
  )
}

export default Navbar
const NavContainer = styled.nav`
  h2 {
    font-weight: 400;
    color: white;
    margin-left: 1rem;
    cursor: pointer;
    span {
      font-weight: bold;
      color: red;
    }
  }

  padding: .4rem;
    background-color: #303030;
    display: flex;
    align-items: center;
    justify-content: space-between;

  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }

  a:hover {
    color: red;
    transition: all .7s;
  }
`