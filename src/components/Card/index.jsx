import styled from "styled-components";

export const ContainerCard = styled.div`
    visibility: ${props => props.$matched ? 'hidden' : 'visible'};
    & img {
        max-height: 80%;
        max-width: 60%;
    }
    transition: transform 1s;
    transform: ${(props) => props.rotate ? "rotateY(180deg)" : "rotateY(0deg)"};
    transition: transform 400ms;
    backface-visibility: hidden;
`;

export const ContainerCardFront = styled.img`
    transform: ${(props) => props.rotate ? "rotateY(0deg)" : "rotateY(-180deg)"};
`;

const Card = ({ image, card, getCardFlipped, toggle, index, matched, maxClickedCards }) => {
    
    const getCard = () => {
        getCardFlipped(index);
    }
    
    return (
        <ContainerCard $matched={matched} onClick={maxClickedCards ? '' : getCard} rotate={toggle}>
            <ContainerCardFront src={image} alt='card-image' />
        </ContainerCard>
    )
}

export default Card;