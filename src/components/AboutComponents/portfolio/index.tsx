import React from 'react'
import { Container, Heading, Box, Flex, Text } from '@chakra-ui/react'
import { colors } from "@/styles/theme";

interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = () => {
    return (
        <>
            <Container maxW="md" py='3rem' px='4rem' bg='#244ba8' color={`${colors.lightColor}`}>
                <Flex justify='center' align='center' flexDir='row' gap='4rem'>
                    <Box textAlign='center'>
                        <Heading fontSize='52px' fontWeight='600'>15,000+</Heading>
                        <Text>institutions nationwide</Text>
                    </Box>
                    <Box textAlign='center' >
                        <Heading fontSize='52px' fontWeight='600'>4,200</Heading>
                        <Text>companies we’ve helped to create</Text>
                    </Box>
                    <Box textAlign='center'>
                        <Heading fontSize='52px' fontWeight='600'>40</Heading>
                        <Text>hours freed up from admin work for<br></br> our clients monthly</Text>
                    </Box>
                </Flex>
                <Flex justify='center' align='center' flexDir='row' gap='4rem' mt='4rem'>
                    <Box textAlign='center'>
                        <Heading fontSize='52px' fontWeight='600'>2,800</Heading>
                        <Text>documents received, tagged and<br></br> processed monthly</Text>
                    </Box>
                    <Box textAlign='center'>
                        <Heading fontSize='52px' fontWeight='600'>100</Heading>
                        <Text>trees saved yearly by <br></br>digitising paperwork</Text>
                    </Box>
                </Flex>

            </Container>
        </>
    )
}

export default Portfolio;