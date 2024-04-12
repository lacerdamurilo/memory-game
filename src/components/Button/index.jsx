import styled from "styled-components";

const StyledButton = styled.button`
    border: 1px solid;
    width: 30%;
    border-radius: 15px;
    padding: .5rem;
    background-color: #6b8f84;
`;

const Button = ({ children }) => {
    return (
        <StyledButton>
            {children}
        </StyledButton>
    )
}

export default Button;