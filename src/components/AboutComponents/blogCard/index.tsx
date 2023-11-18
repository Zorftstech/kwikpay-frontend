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
            <Center py={6}>
                <Box
                    maxW={'445px'}
                    w={'full'}
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    bg={useColorModeValue('white', 'gray.900')}
                    boxShadow={'xl'}
                    rounded={'lg'}
                    p={6}
                    overflow={'hidden'}>
                    <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                    <Image
                        src={image}
                        fill
                        alt={title}
                    />
                    </Box>
                    <Stack>
                    <Heading
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        {title}
                    </Heading>
                    <Text color={'gray.500'}>
                        {text}
                    </Text>
                    </Stack>
                    <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                    <Avatar src={profile} />
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                        <Text fontWeight={600}>Achim Rolle</Text>
                        <Text color={'gray.500'}><GiSandsOfTime /> · {time}</Text>
                    </Stack>
                    </Stack>
                </Box>
            </Center>
        </>
    )
}

export default BlogCard;