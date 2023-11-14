import { styled } from "styled-components";
import { colors } from "./theme";

export interface LogoProps {
    className?: string;
}

export interface FooterProps {
    className?: string;
}
export interface FooterLinksProps {
    className?: string;
}


const Logo = styled.div<LogoProps>`
    width: 250px;

    img {
        width: 100%;
        height: 100%;
    }
`;

const FooterWrapper = styled.footer<FooterProps>`
    background: ${colors.darkColor};
    color: ${colors.lightColor};

    padding: 6rem 4rem;
`;

const FooterLinks = styled.ul<FooterLinksProps>`
    list-style: none;
    margin: 1rem 0;

    li {
        text-transform: capitalize;
        font-size: 18px;
        color: ${colors.lightColor};
        
        a {
            font-weight: 400;
        }
    }
`;

export { Logo, FooterWrapper, FooterLinks }