import React from "react";
import { Container, Heading, Flex, Box, Stack, Text, Button } from '@chakra-ui/react'
import { ImgWrapper, Contact } from "@/styles/home.style";
import { colors } from "@/styles/theme";
import Image from 'next/image';
import { CreditCard, CreditCardPayments, kampus, Payments } from "../../../public/assets/index";
import { BsArrowRight } from 'react-icons/bs'

interface WhoWeHelpProps {}

const WhoWeHelp: React.FC<WhoWeHelpProps> = () => {
  return (
    <Container maxW='md' py='6rem' px='4rem' bg={`${colors.lightColor}`}>
        <Text textTransform='uppercase' fontSize='18px' textAlign='center' color={`${colors.titleColor}`} >WHO WE HELP</Text>
        <Heading textAlign='center' fontSize='72px' fontWeight='600' color={`${colors.darkColor}`}>For schools ready to<br></br> ditch the books and do <br></br>business</Heading>

        <Flex justify='center' align='center' mt='4rem'>
            <ImgWrapper>
                <Image src={kampus} alt='principal' />
            </ImgWrapper>
            <Box w='50%'>
                <Heading fontSize='24px'>Solo founders who want to reclaim their weekends from financial admin <i>Business owners </i>who know their needs and value quality service</Heading>
            </Box>
        </Flex>

        <Flex justify='center' align='center' flexDir='row-reverse'>
            <ImgWrapper>
                <Image src={kampus} alt='principal' />
            </ImgWrapper>
            <Box w='50%'>
                <Heading fontSize='24px'>Solo founders who want to reclaim their weekends from financial admin <i>Business owners </i>who know their needs and value quality service</Heading>
            </Box>
        </Flex>

        <Flex justify='center' align='center'>
            <ImgWrapper>
                <Image src={kampus} alt='principal' />
            </ImgWrapper>
            <Box w='50%'>
                <Heading fontSize='24px'>Solo founders who want to reclaim their weekends from financial admin <i>Business owners </i>who know their needs and value quality service</Heading>
            </Box>
        </Flex>
    </Container>
  )
}

export default WhoWeHelp;