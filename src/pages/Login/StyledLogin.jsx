import styled from 'styled-components'; 
import LoginBackground from '../../assets/Imagens/login-animado-background.gif';

export const MainContainerStyled = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${LoginBackground}) ;
    background-size: cover;
    background-position: center;
`;

export const LoginContainerStyled = styled.div`
    width: 30%;
    height: 20rem;
    border-radius: 15px;
    background-color: #e1e3e6;
    box-shadow: 10px 10px 12px -8px rgba(0,0,0,0.75);;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
`;