import styled from 'styled-components';
import CharmanderGif from '../../assets/Imagens/charmander-chases-tail.gif';

const StyledLogo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & img {
        background-size: cover;
        background-position: center;
        width: 50%;
    }
    & h2 {
        margin: 0;
    }
`;

const Logo = () => {
    return (
        <StyledLogo>
            <img src={CharmanderGif} alt='charmander perseguindo o proprio rabo'/>
            <h2>Memory Game</h2>
        </StyledLogo>
    )
}

export default Logo;