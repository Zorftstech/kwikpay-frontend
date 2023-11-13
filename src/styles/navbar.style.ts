import { styled } from "styled-components";
import { colors } from "./theme";

export interface WrapperProps {
  className?: string;
}
export interface LogoProps {
  className?: string;
}

export interface NavLinksProps {
    className?: string;
}

export interface ButtonProps {
    className?: string;
}

const Wrapper = styled.nav<WrapperProps>`
  width: 100%;
  padding: 1.4rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  @media (max-width: 992px) {
    display: none !important;
  }
`;

const Logo = styled.div<LogoProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 28px;
  font-weight: 600;
  color: ${colors.primaryColor};
`;

const NavLinks = styled.ul<NavLinksProps>`
    display: flex;
    justify-content: center;
    align: center;

    list-style: none;
    li {
        font-size: 18px;    
        color: ${colors.darkColor};
        padding: 0 1.5rem;
        
    }
`;

const Button = styled.a<ButtonProps>`
    background: ${colors.darkColor};
    color: ${colors.lightColor};

    padding: 1rem 2.5rem;
    border-radius: 25px;
    
`;

export { Wrapper, Logo, NavLinks, Button };
