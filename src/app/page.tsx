// pages/index.tsx
"use client"
import Layout from "@/components/layout/layout";
import { Container, Heading, Flex, Text } from '@chakra-ui/react'
import { Button, Contact } from "@/styles/home.style";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Container maxW='md' py='3rem' px='4rem'>
        <Heading textAlign='center' fontSize='72px' fontWeight='600'>Say goodbye to long queues and hello to digital fee <br></br>payments.</Heading>

        <Text textAlign='center' fontSize='24px' mt='1.5rem'>Pay your school, faculty and department fees digitally, anytime, anywhere.</Text>

        <Flex justify='center' align='center' my='1.5rem' gap='1.5rem'>
          <Button>Register now</Button>
          <Contact>Contact us</Contact>
        </Flex>

      </Container>
    </Layout>
  );
};

export default IndexPage;
