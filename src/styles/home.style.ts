import { styled } from "styled-components";
import { colors } from "./theme";

export interface ButtonProps {
    className?: string;
}
export interface ContactProps {
    className?: string;
}

const Button = styled.a<ButtonProps>`
    background: ${colors.primaryColor};
    color: ${colors.lightColor};

    font-size: 18px;

    padding: 1rem 2.5rem;
    border-radius: 30px;
    cursor: pointer;

    &:hover {
        opacity: .9;
    }
`;

const Contact = styled.a<ContactProps>`
    background: transparent;
    color: ${colors.primaryColor};

    font-size: 18px;

    padding: 1rem 2.5rem;
    border: 2px solid ${colors.primaryColor};
    border-radius: 30px;
    cursor: pointer;

    &:hover {
        background: ${colors.primaryColor};
        color: ${colors.lightColor};
    }
`;

export { Button, Contact };