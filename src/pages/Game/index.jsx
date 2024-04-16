import Header from '../../components/Header';
import { ContainerCardsStyled, GameContainer } from './StyledGame';
import { Cards } from '../../components/RenderCards';
import { useState } from 'react';
import Modal from '/src/components/Modal';

const Game = ({ userNick }) => {
    const [visibility, setVisibility] = useState(true);
    const [cardsQtd, setCardsQtd] = useState();
    const [flipped, setFlipped] = useState(false);

    const getRandomCards = (array, number) => {
        const shuffledArray = array.sort(() => Math.random() - 0.5);
        return shuffledArray.slice(0, number);
    }

    const flippedHandler = (card) => {
        setFlipped(true);
    }

    const pairsCards = getRandomCards(Cards, (cardsQtd));
    const clonePairsCards = pairsCards;

    return (
        <>
            {visibility ?
                <>
                    <GameContainer>
                        <Header headerNick={userNick} />
                        <Modal close={() => setVisibility(false)} cardsQtd={setCardsQtd} />
                    </GameContainer>
                </> :
                <>
                    <GameContainer>
                        <Header headerNick={userNick} />
                        <ContainerCardsStyled>
                            {pairsCards.map((card, index) => {
                                return (
                                    <div key={index} onClick={flippedHandler(card[index])}>
                                        <img src={flipped ? card.src : card.back} />
                                    </div>
                                )
                            })}
                            {clonePairsCards.map((card, index) => {
                                return (
                                    <div key={index} onClick={flippedHandler(card[index])}>
                                        <img src={flipped ? card.src : card.back} />
                                    </div>
                                )
                            })}
                            {/* {Cards.map((card, index) => {
                                return (
                                    <div key={index}>
                                        <img src={card.src} />
                                    </div>
                                )
                            })} */}
                        </ContainerCardsStyled>
                    </GameContainer>
                </>}
        </>
    )
}

export default Game;