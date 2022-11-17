import React from 'react';
import styled from '@emotion/styled';

const Navbar = () => {
  return (
    <Nav>
      <Logo href="#">
        Heph Video Player
      </Logo>
      <Menu>
        <Link href="#">About</Link>
        <Link href="#">Change</Link>
        <Link href="#">GitHub</Link>
      </Menu>
    </Nav>
  )
}

//Styling

const Nav = styled.div`
padding: 0 2rem;

display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;

background: #252525;`

const Menu = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
height: 1.3rem;
`
const Logo = styled.a`
padding: 1rem 0;
text-decoration: none;
color: #f5cb6e;
font-size: 1.3rem;
font-weight: 700;`

const Link = styled.a`
padding: 0 2rem;
cursor: pointer;
text-decoration: none;
color: #DCDADA;
transition: all 0.5s ease-in-out;


&:hover {
  color: #f5cb6e;
  border-bottom: 1px solid #f5cb6e;
}`

export default Navbar