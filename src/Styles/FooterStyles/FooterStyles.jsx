import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: #333333;
    height: 28rem;
    width: 100%;
    `;

export const FooterInnerContainer = styled.article`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 65%;
    height: 100%;
    margin: auto;
    `;

export const FooterImg = styled.div`
    background: no-repeat center/100% url('https://images.pexels.com/photos/3887985/pexels-photo-3887985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
    border-radius: 1.6rem;
    height: 21rem;
    width: 18rem;
    margin: 0;
    `;

export const FooterList = styled.ul`
    display: flex;
    flex-flow: column wrap;
    `;

export const FooterLink = styled.a`
    color: white;
    font-size: 1.5rem;
    `;