import styled from 'styled-components';

export const ModalContainer = styled.aside`
    height: auto;
    width: 30%;
    background-color: rgba(107,143,132, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: .5rem;
    border-radius: 0 15px 15px 0;
    position: absolute;
    padding: 1rem;
`;

export const ModalSelect = styled.select`
    border: 0;
    border-radius: 15px;
    text-align: center;
`;