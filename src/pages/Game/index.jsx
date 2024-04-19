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

    const getRandomCards = (array, number) => {
        const shuffledCards = array.sort(() => Math.random() - 0.5).slice(0, number);
        const cloneCards = shuffledCards.slice().sort(() => Math.random() - 0.5);
        const test = cloneCards.map(card => ({ ...card }));
        return ([...shuffledCards, ...test]);
    }

    useEffect(() => {
        const pairsCards = getRandomCards(Cards, (cardsQtd));
        setRandomCards(pairsCards);
    }, [cardsQtd]);

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
                },1000)
                // errou
            } else {
                setTimeout(() => {
                    setFlippedCards([]);//ainda n sei
                    console.log(flippedCards);
                    const firstCardIndex = newCards[0];
                    console.log(firstCardIndex);
                    const secondCardIndex = newCards[1];
                    console.log(secondCardIndex);
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