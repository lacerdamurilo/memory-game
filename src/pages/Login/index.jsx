import Button, { StyledButton } from '../../components/Button';
import { MainContainerStyled, LoginContainerStyled, InputStyled } from './StyledLogin';
import Logo from '../../components/Logo';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ nickLogin }) => {

    return (
        <MainContainerStyled>
            <LoginContainerStyled>
                <Logo />
                <InputStyled
                    type='text'
                    placeholder='Digite seu nick...'
                    onChange={e => nickLogin(e.target.value)}
                />
                <Link to={'/game'}>
                    <StyledButton>Entrar</StyledButton>
                </Link>
            </LoginContainerStyled>
        </MainContainerStyled>
    )
}

export default Login;