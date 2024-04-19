import Header from '../../components/Header';
import { ContainerCardsStyled, GameContainer } from './StyledGame';
import { Cards } from '../../components/RenderCards';
import { useEffect, useState } from 'react';
import Modal from '/src/components/Modal';
import Card from '/src/components/Card';

const Game = ({ userNick }) => {
    const [visibility, setVisibility] = useState(true);
    const [cardsQtd, setCardsQtd] = useState(0);
    const [randomCards, setRandomCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);

    const [maxClickedCards, setMaxClickedCards] = useState(false);

    const getRandomCards = (array, number) => {
        const shuffledCards = array.sort(() => Math.random() - 0.5).slice(0, number);
        const clone = shuffledCards.slice().sort(() => Math.random() - 0.5);
        const cloneCards = clone.map(card => ({ ...card }));
        return ([...shuffledCards, ...cloneCards]);
    }

    useEffect(() => {
        const resetCards = Cards.map((card => {
            card.toggle = false;
            card.clicked = false;
            card.matched = false;
            card.flipped = false;
            return card;
        }));
        const pairsCards = getRandomCards(resetCards, (cardsQtd));
        console.log(pairsCards)
        setRandomCards(pairsCards);
    }, [cardsQtd]);

    useEffect(() => {
        const isGameFinished = randomCards.every(card => card.matched);
        if (isGameFinished) {
            setVisibility(true);
        }
    }, [randomCards]);

    useEffect(() => {
        if (flippedCards.length === 2){
            setMaxClickedCards(true)
        } else {
            setMaxClickedCards(false)
        }
    }, [flippedCards]);
    
    const getCardFlipped = (index) => {
        const card = randomCards[index];
        card.toggle = !card.toggle; // toggle do toggle ksks
        card.flipped = !card.flipped; // toggle do flipped
        const gameCards = [...randomCards]; // copiando o array das cartas num novo
        gameCards[index] = card; // altera o antigo card com o novo card q agr esta flipped
        const newCards = [...flippedCards, index]; //setando quantas cartas foram clicadas atraves do index
        setRandomCards(gameCards); //mudando o randomCards agora com a versao onde a carta clicada esta flipped
        setFlippedCards(newCards); //ele ajuda a dizer quando o newCards estara com 2 index
        if (newCards.length === 2) {
            // acertou
            const firstCard = gameCards[newCards[0]];
            const secondCard = gameCards[newCards[1]];
            if (firstCard.id === secondCard.id) {
                setTimeout(() => {
                    const removedCards = gameCards.map(gameCard => {
                        if (gameCard.id === card.id) {
                            gameCard.matched = true;
                        }
                        return gameCard;
                    });
                    setRandomCards(removedCards);
                    setFlippedCards([]);
                }, 1000)
                // errou
            } else {
                setTimeout(() => {
                    setFlippedCards([]);//ainda n sei
                    const firstCardIndex = newCards[0];
                    const secondCardIndex = newCards[1];
                    const unflipedCards = gameCards.map((gameCard, index) => {
                        if (index === firstCardIndex || index === secondCardIndex) {
                            gameCard.flipped = !gameCard.flipped
                            gameCard.toggle = !gameCard.toggle;
                        }
                        return gameCard
                    });
                    setRandomCards(unflipedCards);
                }, 1500)
            }
        }
    }

    const resetGame = () => {
        const resetCards = Cards.map((card => {
            card.toggle = false;
            card.clicked = false;
            card.matched = true;
            card.flipped = false;
            return card;
        }));
        setRandomCards(resetCards);
    }

    return (
        <>
            {visibility ?
                <>
                    <GameContainer>
                        <Header headerNick={userNick} config={resetGame} />
                        <Modal close={() => setVisibility(false)} cardsQtd={setCardsQtd} />
                    </GameContainer>
                </> :
                <>
                    <GameContainer>
                        <Header headerNick={userNick} config={resetGame} />
                        <ContainerCardsStyled>
                            {randomCards.map((card, index) => {
                                return (
                                    <Card
                                        key={index}
                                        image={card.flipped ? card.src : card.back}
                                        card={card}
                                        getCardFlipped={getCardFlipped} // a responsabilidade de saber se acertou o par, nao deveria ficar no componente card
                                        toggle={card.toggle}
                                        index={index}
                                        matched={card.matched}
                                        maxClickedCards={maxClickedCards}
                                    />
                                )
                            })}
                        </ContainerCardsStyled>
                    </GameContainer>
                </>}
        </>
    )
}

export default Game;