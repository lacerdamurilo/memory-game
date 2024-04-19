import styled from 'styled-components';
import MuriMine from './muriloAvatar.jpeg';
import Header from '/src/components/Header';
import { GameContainer } from '/src/pages/Game/StyledGame';

const ContainerLeaderboard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;

const ContainerMurilo = styled.img`
    background-position: center;
    height: 400px;
    border-radius: 50%;
`;

const Leaderboard = () => {
    return (
        <>
            <GameContainer>
                <Header />
                <ContainerLeaderboard>
                    <ContainerMurilo src={MuriMine}/>
                </ContainerLeaderboard>
            </GameContainer>
        </>
    )
}

export default Leaderboard;