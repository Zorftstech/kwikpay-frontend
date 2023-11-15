import { styled } from "styled-components";
import { colors } from "./theme";

export interface ButtonProps {
    className?: string;
}
export interface ContactProps {
    className?: string;
}

export interface SubHeroProps {
    className?: string;
}

export interface ImgWrapperProps {
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
    display: flex;
    justify-content: start;
    align-items: center;

    padding: 1rem 2.5rem;
    border: 2px solid ${colors.primaryColor};
    border-radius: 30px;
    cursor: pointer;

    &:hover {
        background: ${colors.primaryColor};
        color: ${colors.lightColor};
        transition: all 1s ease-in-out;

        svg {
            transform: translate(10px);
            transition: all .3s ease-in-out;
        }
    }

    svg {
        font-size: 24px;
        font-weight: 600;
        margin-left: 1rem;
    }
`;

const SubHero = styled.div<SubHeroProps>`
    margin: 0 4rem;
    margin-top: 4rem;
    /* height: 600px; */
    
    img {
        border-radius: 38px;
        width: 100%;
        height: 100%;
    }

`;

const ImgWrapper = styled.div<ImgWrapperProps>`
    width: 250px;
    
    img {
        width: 100%;
        height: 100%;
    }
`;

export { Button, Contact, SubHero, ImgWrapper };