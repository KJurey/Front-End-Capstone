import styled from "styled-components";

export const ArticleContainer = styled.article`
    display: flex;
    flex-direction: column;
    width: 65%;
    margin: auto auto 5rem;
    `;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    `;

export const HeaderButton = styled.button`
    background-color: #F4CE14;
    border-radius: 1rem;
    border-width: 0;
    height: 3rem;
    width: 10rem;
    font-size: 1rem;
    font-weight: 600;
    `;

export const CardsContainer = styled.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    `;

export const CardContainer = styled.section`
        display: flex;
        flex-flow: column wrap;
        background-color: #EDEFEE;
        height: 35rem;
        width: 16.5rem;
        border-radius: 1rem 1rem 0 0;
        `;

export const Header1 = styled.h1`
    font-size: 4rem;
    font-weight: 500;
    `;

export const CardImg = styled.div`
    background: no-repeat center/100% url('https://images.pexels.com/photos/4039006/pexels-photo-4039006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
    border-radius: 1rem 1rem 0 0;
    height: 13rem;
    width: 16.5rem;
    `;

export const CardImg2 = styled.div`
    background: center/ cover no-repeat url('https://images.pexels.com/photos/7432991/pexels-photo-7432991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
    border-radius: 1rem 1rem 0 0;
    height: 13rem;
    width: 16.5rem;
    `;

export const CardImg3 = styled.div`
    background: no-repeat center/100% url('https://images.pexels.com/photos/14000010/pexels-photo-14000010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
    border-radius: 1rem 1rem 0 0;
    height: 13rem;
    width: 16.5rem;
    `;

export const DescriptionContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    margin: 0 auto;
    width: 80%;
    height: 22rem;
    `;

export const DescriptionInnerContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    `;

export const HeaderDescription = styled.h3`
    font-size: 2.4em;
    `;

export const HeaderPrice = styled.h3`
    font-size: 2.4em;
    color: #EE9972;
    `;

export const DescriptionP = styled.p`
    font-size: 2.1em;
    `;

export const CardCta = styled.h3`
    font-size: 2em;
    `;
