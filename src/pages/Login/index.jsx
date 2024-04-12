import Button from '../../components/Button';
import CharmanderGif from '../../assets/Imagens/charmander-chases-tail.gif';
import { MainContainerStyled, LoginContainerStyled, InputStyled } from './StyledLogin';
import Logo from '../../components/Logo';

const Login = () => {
    return (
        <MainContainerStyled>
            <LoginContainerStyled>
                <Logo />
                <InputStyled type='text' placeholder='Digite seu nick...'/>
                <Button>Entrar</Button>
            </LoginContainerStyled>
        </MainContainerStyled>
    )
}

export default Login;