import LoginBackground from '/src/assets/Imagens/login-animado-background.gif';
import styled from "styled-components";

export const GameContainer = styled.div`
    min-height: 100vh;
    box-sizing: border-box;
    background-image: url(${LoginBackground}) ;
    background-size: cover;
    background-position: center;
    box-sizing: border-box;
`;

export const ContainerCardsStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`;