import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavContainer = styled.nav`
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    width: 65%;
    height: 5rem
    `

export const NavList = styled.ul`
    display: flex;
    width: 100%;
    justify-content: space-around;
    list-style: none;
    
    `
export const NavListAnchor = styled(Link)`
    text-decoration: none;
    font-size: 1.8em;
    font-weight: 700;
    font-family: 'Karla';
    color: black;
    `