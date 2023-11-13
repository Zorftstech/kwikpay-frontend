"use client"
import React from "react";
import { Logo, Wrapper, NavLinks, Button } from "@/styles/navbar.style";
import {logo} from '../../../public/assets/index'
import { Image } from '@chakra-ui/react'

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {

  return (
    <Wrapper suppressHydrationWarning>
      <Logo>
        KwikPay
      </Logo>
      <NavLinks>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/about">Support</a>
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
