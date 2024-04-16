import { ModalContainer, ModalSelect } from "./StyledModal";
import { StyledButton } from "/src/components/Button";

const Modal = ({ close, cardsQtd }) => {

    const teste = (e) => {
        console.log(e.target.value);
    }

    return (
        <ModalContainer>
            <label>Selecione a quantidade de pares</label>
            <ModalSelect required={true} onChange={e => cardsQtd(e.target.value) & teste(e)}>
                <option value={""} selected disabled hidden>Escolha</option>
                <option value={3}>3</option>
                <option value={5}>5</option>
            </ModalSelect>
            <StyledButton onClick={() => close()}>Fechar</StyledButton>
        </ModalContainer>
    )
}

export default Modal;