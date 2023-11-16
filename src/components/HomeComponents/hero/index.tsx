import React from 'react'
import { Container, Heading, Flex, Text } from '@chakra-ui/react'
import { Button, Contact } from "@/styles/home.style";
import { colors } from "@/styles/theme";
import { FaSchool } from 'react-icons/fa'

interface HeroProps {}

const Hero: React.FC<HeroProps> = () =>{
  return (
    <>
        <Container maxW='md' py='3rem' px='4rem'>
            <Heading textAlign='center' fontSize='72px' fontWeight='600' color={`${colors.darkColor}`}>Say goodbye to long queues and hello to digital fee <br></br>payments.</Heading>

            <Text textAlign='center' fontSize='24px' mt='1.5rem'>Pay your school, faculty and department fees digitally. anytime. anywhere.</Text>

            <Flex justify='center' align='center' my='1.5rem' gap='1.5rem'>
            <Button>Register now</Button>
            <Contact>Contact us</Contact>
            </Flex>

            <Flex 
            justify='center' 
            align='center' 
            mt='2.5rem' gap='.9rem' 
            fontSize='16px' fontWeight='300'
            bg={`${colors.darkColor}`}
            py='1rem' px='1rem'
            borderRadius='30px'
            color={`${colors.lightColor}`}
            >
            <FaSchool style={{ color: `${colors.primaryColor}`}} /> Used by more than 15 institutions nationwide.
            </Flex>

        </Container>
    </>
  )
}

export default Hero;