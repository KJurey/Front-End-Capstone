import styled from "styled-components";

export const ArticleContainer = styled.article`
    background-color: #F4CE14;
    height: 28rem;
    width: 100%;
    `;

export const TestimonialOutContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
    justify-content: center;
    width: 65%;
    height: 100%;
    `;
export const TestimonialsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 100%;
    `;

export const TestimonialContainer = styled.section`
    display flex;
    flex-flow: column wrap;
    background-color: #EDEFEE;
    width: 13rem;
    height: 10rem;
    `;

export const TestimonialInnerContainer = styled.div`
    width: 80%;
    margin: auto;
    `;

export const TestimonialHeader = styled.h2`
    font-size: 2.1rem;
    margin-top: 0;
    `;

export const TestimonialRating = styled.h4`
    font-size: 1.8rem;
    font-weight: 500;
    margin: 0;
    `;

export const TestimonialImg = styled.div`
    background: center / cover no-repeat url('https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    margin-right: 1rem;
    `;

export const TestimonialGroup = styled.div`
    display: flex;
    align-items: center;
    `
export const TestimonialText = styled.p`
    font-size: 1.5rem;
    margin: 0;
    `;