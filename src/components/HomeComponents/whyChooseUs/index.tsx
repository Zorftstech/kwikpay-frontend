import React from 'react'
import { Container, Heading, Flex, Text  } from '@chakra-ui/react'
import { colors } from '@/styles/theme';

interface WhyChooseUsProps {}

const WhyChooseUs: React.FC<WhyChooseUsProps> = () => {
  return (
    <Container maxW='md' py='6rem' px='4rem'>
        <Text textTransform='uppercase' fontSize='18px' textAlign='center' color={`${colors.titleColor}`}>WHY CHOOSE US</Text>
    </Container>
  )
}

export default WhyChooseUs;