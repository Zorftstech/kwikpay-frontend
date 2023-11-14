import React from "react";
import { Container, Heading, Flex, Center, Grid, GridItem, Text } from '@chakra-ui/react'
import { FooterWrapper, FooterLinks, Logo } from "@/styles/footer.style";
import Image from 'next/image';
import { logo } from "../../../public/assets/index";
import { colors } from "@/styles/theme";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <Container bg={`${colors.darkColor}`} placeContent='center' mt='4rem'>
      <FooterWrapper>
        <Grid templateColumns='repeat(4, 1fr)' gap={4}>

          <GridItem w='100%' mr='3rem'>
            <Logo>
              <Image src={logo} alt='logo' />
            </Logo>

            {/* <Text fontSize='18px' color={`${colors.lightColor}`}>At KwikPay, we're changing the way you handle transactions, one click at a time. Seamlessly integrated into your daily life, our app provides a fast, secure, and efficient way to manage your payments, making financial transactions easier than ever before.</Text> */}
          </GridItem>

          {/* ============= company grid ============= */}
          <GridItem w='100%'>
            <Heading color={`${colors.primaryColor}`} fontSize='16px'>Company</Heading>

            <FooterLinks>
              <li><a href="#">How it works</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Careers</a></li>
            </FooterLinks>
          </GridItem>

          {/* ============== Help grid ============ */}
          <GridItem w='100%'>
            <Heading color={`${colors.primaryColor}`} fontSize='16px'>Help</Heading>

            <FooterLinks>
              <li><a href="#">Help Centre</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy </a></li>
              <li><a href="#">Support</a></li>
            </FooterLinks>
          </GridItem>

          {/* ============= Connect grid ============ */}
          <GridItem w='100%'>
            <Heading color={`${colors.primaryColor}`} fontSize='16px'>Contact</Heading>

            <FooterLinks>
              <li><a href="#">Help Centre</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy </a></li>
              <li><a href="#">Site Map</a></li>
              <li><a href="#">Community</a></li>
            </FooterLinks>
          </GridItem>
        </Grid>
      </FooterWrapper>
      <Center bg={`${colors.titleColor}`} h='2px' mx='3rem' />
      <Text textAlign='center' fontSize="14px" fontWeight='400' color={`${colors.lightColor}`} py='1rem' pt='2rem'>© 2023 KwikPay. All rights reserved.</Text>
    </Container>
  );
};

export default Footer;
