"use client"
import AboutSection from "@/components/AboutComponents/aboutSection/index"
import Portfolio from "@/components/AboutComponents/portfolio/index"
import Layout from "@/components/layout/layout"
import { Container, Heading, Flex } from '@chakra-ui/react'
import { colors } from "@/styles/theme"
import BlogCard from "@/components/AboutComponents/blogCard/index"
import { blogs } from "@/components/AboutComponents/data"
import Newsletter from "@/components/AboutComponents/newsletter/index"
import Testimonials from "@/components/AboutComponents/testimonial/index"


const About: React.FC = () => {
    return (
        <Layout>
            <AboutSection />
            <Portfolio />
            <Container maxW='lg' pt='3rem' px='4rem' bg='#f2f7fc' color={`${colors.primaryColor}`}>
                <Testimonials />
            </Container>
            <Container maxW='lg' py='3rem' px='4rem' bg='#f2f7fc' color={`${colors.primaryColor}`}>
                <Heading fontSize='54px' fontWeight='600' color={`${colors.primaryColor}`} textAlign='center' mt='7rem' mb='3rem'>Learn from our experts</Heading>
                <Flex justify='center' align='center' gap='1rem'>
                    {blogs.slice(0, 3).map((item) => (
                        <BlogCard id={item.id} title={item.title} image={item.image} text={item.text} time={item.time} /> 
                    ))}
                </Flex>
            </Container>
            <Newsletter />
        </Layout>
    )
}

export default About