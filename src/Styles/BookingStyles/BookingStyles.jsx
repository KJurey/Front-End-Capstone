import styled from "styled-components";

export const Background = styled.div`
    height: auto;
    width: auto;
    background: space repeat center/5% url("src/assets/little_lemon.png")
    `;

export const MainFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: fit-content;
    `;

export const MainFormContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    `;

export const MainOutContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    `;

export const CardContainer = styled.div`
    min-width: 550px;
    min-height: 330px;
    border-radius: 10px;
    margin: 5rem auto;
    display: flex;
    justify-content: center;
    background-color: #333333;
    padding: 2rem 0;
    `;

export const FormContainer = styled.form`
    `;

export const FormInContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 230px;
    width: 500px;
    font-size: 1.5rem;
    font-family: 'Karla';
    color: white;
    `;

export const FormField = styled.input`
    padding: 1rem;
    font-size: 1.2rem;
    `;

export const FormSelect = styled.select`
    padding: 1rem;
    font-size: 1.2rem;
    `;

export const FormButton = styled.button`
    height: 3rem;
    width: 15rem;
    margin: auto;
    border-radius: 1rem;
    border: none;
    background-color: #F4CE14;
    font-size: 1.2rem;
    color: #49SE57;
    cursor: pointer;
    color: white;
    `;

export const ErrorP = styled.p`
    color: red;
    `;

export const Header1 = styled.h1`
    font-size: 2rem;
    font-family: 'Karla';
    color: white;
    `;

export const BookingP = styled.p`
    font-size: 1.5rem;
    font-family: 'Karla';
    color: white;
    `;

export const ConfirmBooking = styled.div`
    display: flex;
    flex-flow: column wrap;
    width: 80%;`