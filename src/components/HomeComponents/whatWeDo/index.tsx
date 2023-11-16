import React from "react";
import { Container, Heading, Flex, Box, Stack, Text, Button } from '@chakra-ui/react'
import { ImgWrapper, Contact } from "@/styles/home.style";
import { colors } from "@/styles/theme";
import Image from 'next/image';
import { CreditCard, CreditCardPayments, Payments } from "../../../../public/assets/index";
import { BsArrowRight } from 'react-icons/bs'

interface WhatWeDoProps {}

const WhatWeDO: React.FC<WhatWeDoProps> = () => {
  return (
    <Container maxW='md' py='6rem' px='4rem'>
      <Text textTransform='uppercase' fontSize='18px' textAlign='center' color={`${colors.titleColor}`} >What we do</Text>
      <Heading textAlign='center' fontSize='72px' fontWeight='600' color={`${colors.darkColor}`}>Flexible payments for every level of your institution</Heading>

      <Flex flexDir='row' gap='2rem' my='2rem'>
        <Box borderRadius='16px' bg={`${colors.lightColor}`} p='20px'>
          <Heading fontSize='46px' mb='.8rem'><span style={{color: `${colors.primaryColor}`}}>Receive</span> my payments</Heading>
          <Text fontWeight='400'>Start your business with fast online company incorporation. Plus, a bank account and registered address from day one.</Text>

          <Flex gap='1rem' alignItems='flex-end' mt='2rem'>
            <Stack>
              <Contact>For Colleges <BsArrowRight /></Contact>
              <Contact>For Institutions <BsArrowRight /></Contact>
            </Stack>

            <ImgWrapper>
              <Image src={CreditCard} alt='card' />
            </ImgWrapper>
          </Flex>
        </Box>

        {/* ================ second card ==================  */}
        <Box borderRadius='16px' bg={`${colors.lightColor}`} p='20px'>
          <Heading fontSize='46px' mb='.8rem'><span style={{ color: `${colors.primaryColor}`}}>Switch</span> to KwikPay</Heading>
          <Text fontWeight='400'>Start your business with fast online company incorporation. Plus, a bank account and registered address from day one.</Text>

          <Flex gap='1rem' alignItems='flex-end' mt='2rem' mb='0'>
            <Stack>
              <Contact>Accounting <BsArrowRight /></Contact>
              <Contact>For Institutions <BsArrowRight /></Contact>
            </Stack>

            <ImgWrapper>
              <Image src={CreditCard} alt='card' />
            </ImgWrapper>
          </Flex>
        </Box>

      </Flex>
    </Container>
  );
};

export default WhatWeDO;