import styled from "styled-components";

export const ArticleBioContainer = styled.article`
    height: 28rem;
    width: 100%;
    margin-bottom: 4rem;
    `;

export const BioContainer = styled.div`
    width: 65%;
    margin: auto;
    `;

export const BioInnerContainer = styled.div`
    display: flex;
    margin-top: 3rem;`;

export const BioGroup = styled.div`
    display: flex;
    flex-flow: column wrap;
    `;

export const BioHeader1 = styled.h1`
    font-size: 4rem;
    font-weight: 500;
    color: black;
    margin: 0;
    `;

export const BioHeader2 = styled.h2`
    font-size: 2rem;
    font-weight: 500;
    color: black;
    margin: 0;
    `;

export const BioP = styled.p`
    font-size: 1.8rem;
    padding-right: 3rem;
    `;

export const BioGrid = styled.section`
    display: grid;
    height: 28rem;
    grid-template-columns: repeat(4, 0.5fr);
    grid-template-rows: repeat(4, 7rem);
    `;

export const BioImg1 = styled.div`
    grid-column: 1/3;
    grid-row: 2 / 4;
    background: no-repeat center/100% url('https://images.pexels.com/photos/3297884/pexels-photo-3297884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
    border-radius: 1.6rem;
    height: 21rem;
    width: 18rem;
    margin: 0;
    z-index: 1;
    `;

export const BioImg2 = styled.div`
    grid-column: 2/3;
    grid-row: 1/3 ;
    background: no-repeat center/100% url('https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
    border-radius: 1.6rem;
    height: 21rem;
    width: 18rem;
    margin: 0;
    z-index: 2;
    `;