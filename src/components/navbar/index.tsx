"use client"
import React from "react";
import { Logo, Wrapper, NavLinks, Button } from "@/styles/navbar.style";
import {NavLogo} from '../../../public/assets/index'
import Image from 'next/image';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {

  return (
    <Wrapper suppressHydrationWarning>
      <a href='/'>
        <Logo>
          <Image src={NavLogo} alt='logo' />
        </Logo>
      </a>
      <NavLinks>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/about">How It Works</a>
        </li>
        <li>
          <a href="/about">Blog</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </NavLinks>
      
      <Button>
        Register
      </Button>
    </Wrapper>
  );
};

export default Navbar;
