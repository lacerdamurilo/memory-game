import Header from '../../components/Header';
import { ContainerCardsStyled } from './StyledGame';
import { Cards } from './renderCards';

const Game = () => {

    const cards = Cards;
    console.log(cards)

    return (
        <>
            <Header />
            <ContainerCardsStyled>
                {cards.map((card, index) => {
                    return (
                        <div key={index}>
                            <img src={card.src} />
                        </div>
                    )
                })}
            </ContainerCardsStyled>
        </>
    )
}

export default Game;