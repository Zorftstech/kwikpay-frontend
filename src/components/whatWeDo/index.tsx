import React from "react";
import { Container, Heading, Flex, Text } from '@chakra-ui/react'
import { colors } from "@/styles/theme";

interface WhatWeDoProps {}

const WhatWeDO: React.FC<WhatWeDoProps> = () => {
  return (
    <Container maxW='md' pt='6rem' px='4rem'>
      <Text textTransform='uppercase' fontSize='18px' textAlign='center' color={`${colors.titleColor}`} >What we do</Text>
      <Heading textAlign='center' fontSize='72px' fontWeight='600' color={`${colors.darkColor}`}>Flexible payments for every level of your institution</Heading>
    </Container>
  );
};

export default WhatWeDO;