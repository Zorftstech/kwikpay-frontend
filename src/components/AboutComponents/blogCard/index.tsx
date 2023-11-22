'use client'
import React from 'react'
import Image from 'next/image'
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react'
import { GiSandsOfTime } from "react-icons/gi";
import { colors } from "@/styles/theme";
import { profile } from '../../../../public/assets/blog/index';

interface BlogCardProps {
    id: number;
    title: string;
    text: string;
    image: string;
    time: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, image, title, text, time }) => {
    return (
        <>
            <Center py={6} mb='4rem' rounded={'lg'}>
                <Box
                    maxW={'445px'}
                    w={'full'}
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    bg={useColorModeValue('white', 'gray.900')}
                    boxShadow={'xl'}
                    rounded={'lg'}
                    borderRadius={'16px'}
                    p={6}
                    overflow={'hidden'}>
                    <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                        <Image
                            src={image}
                            fill
                            alt={title}
                            rounded={'lg'}
                        />
                    </Box>
                    <Stack p={8}>
                        <Heading
                            fontSize={'2xl'} fontWeight={'700'}>
                            {title}
                        </Heading>
                        <Text color={'gray.500'} fontSize='15px' fontWeight='300' lineHeight='22px'>
                            {text}
                        </Text>
                        <Flex justifyContent='start' alignItems='center'>
                            <GiSandsOfTime /><Text color={'gray.500'} fontSize='16px' fontWeight='400'> · {time}</Text>
                        </Flex>
                    </Stack>
                    {/* <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                        <Avatar src={profile} />
                        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                            <Text fontWeight={600}>Achim Rolle</Text>
                        </Stack>
                    </Stack> */}
                </Box>
            </Center>
        </>
    )
}

export default BlogCard;