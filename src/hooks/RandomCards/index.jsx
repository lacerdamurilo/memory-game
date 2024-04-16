import { Cards } from "/src/components/RenderCards/";

const randomCards = (cardsQtd) => {
    return (
        Cards[Math.floor((Math.random() * Object.keys(Cards).length))]
    );
}

export default randomCards;