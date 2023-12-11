import React from 'react'
import { Container, Heading, Flex, Text, Grid, GridItem } from '@chakra-ui/react'
import { colors } from "@/styles/theme";

interface AboutSectionProps {}

const AboutSection: React.FC<AboutSectionProps> = () =>{
  return (
    <>
        <Container maxW='md' py='3rem' px='4rem' bg='#f2f7fc' h='85vh' color={`${colors.primaryColor}`}>
            <Heading fontSize='54px' fontWeight='600' color={`${colors.primaryColor}`} textAlign='center' mt='10rem'>About us</Heading>
            <Text fontSize='18px' fontWeight='300' lineHeight='24px' textAlign='center'>We believe that entrepreneurs are society`s problem solvers. They see<br></br> opportunities in complexities and drive us towards progress. Osome doesn`t<br></br> want entrepreneurs to be distracted from the important search for<br></br> the best solutions. By letting us handle all the routine tasks, <br></br>entrepreneurs can focus on driving their business forward.</Text>

        </Container>


        <Container maxW='md' py='5rem' px='4rem' bg='#7cdceb' color={`${colors.primaryColor}`}>
            <Heading fontSize='54px' fontWeight='bold' textAlign='center'>Our mission is to enable<br></br> entrepreneurs to accelerate <br></br>positive changes</Heading>

            <Grid gap='6rem' templateColumns='repeat(2, 1fr)'>
                <GridItem textAlign='start' mt='6rem'>
                    <Heading fontSize='34px'>Simple</Heading>
                    <Text mt='1rem' fontWeight='400' lineHeight='20px'>It`s simple to get the app and use indó. We are not playing hide and seek with fees or what we`re providing to our users. We tell it like it is. Simplicity allows us to move fast to make the experience fun and our cost is low so we can offer better terms than the other banks. Simplicity also means we are free from any unnecessity that benefits no one.</Text>
                </GridItem>

                <GridItem textAlign='start' mt='6rem'>
                    <Heading fontSize='34px'>Transparent</Heading>
                    <Text mt='1rem' fontWeight='400' lineHeight='20px'>We have a right to know where the clothes we wear and the food we eat comes from. When people were asked to describe banks as they would like them to be in the future, transparency was a clear demand. That`s why we make an effort to have indó be as transparent as possible. What do we have to hide?</Text>
                </GridItem>

                <GridItem textAlign='start'>
                    <Heading fontSize='34px'>Ever Evolving</Heading>
                    <Text mt='1rem' fontWeight='400' lineHeight='20px'>We are a team of professionals that always strive to become better — as individuals, employees, business partners, and a company. Osome never stops seeking a faster and better-quality way to work.</Text>
                    
                    <Text mt='.5rem' fontWeight='400' lineHeight='20px'>Details are important — only through paying attention and precisely follow the process we can see the big picture and spot opportunities to improve.</Text>

                </GridItem>
            </Grid>
        </Container>
    </>
  )
}

export default AboutSection