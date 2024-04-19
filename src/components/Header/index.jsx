import { CiLogout } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";
import { MdLeaderboard } from "react-icons/md";
import Logo from "../../components/Logo";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    padding: 1.5rem;
    background-color: #6b8f84;
`;

const StyledUser = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledUserInfo = styled.div`
    display: flex;
`;

const StyledNav = styled.nav`
    display: flex;
    gap: 1rem;
    justify-content: center;
`;

const Header = ({ headerNick, config }) => {
    return (
        <StyledHeader>
            <Logo />
            <StyledUser>
                <h1>{headerNick}</h1>
                <StyledUserInfo>
                    <h3>CONTADOR</h3>
                </StyledUserInfo>
            </StyledUser>
            <StyledNav>
                <Link to={'/'}>
                    <CiLogout size={25} color="black"/>
                </Link>
                <Link to={'/leaderboard'}>
                    <MdLeaderboard size={25} color="black"/>
                </Link>
                {config && <GrPowerReset onClick={() => config()} size={25} color="black"/>}
            </StyledNav>
        </StyledHeader>
    )
}

export default Header;