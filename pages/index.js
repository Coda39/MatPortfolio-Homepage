import NextLink from 'next/link'
import { Container, Box , Heading, Image, Link, List, ListItem, Button, Icon, SimpleGrid, useColorModeValue} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import { BioSection , BioYear } from '../components/bio'
import {GridItem } from '../components/grid-items'
import {
    IoLogoGithub, IoDocumentText, IoMail, 
} from 'react-icons/io5'


function Page() {
    return (
        <Layout>    
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello I&apos;m a Student who spends majority of their time in a chair, coding!
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Mateo Estrada
                    </Heading>
                    <p>
                        Student ( Coder / Developer / Learner )
                    </p>
                </Box>
                <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="200px" display="inline-block" borderRadius="15px" src="/images/icon.jpg" alt="Profile Image" />
                </Box>
            </Box>
            
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    <br></br>
                    I am a current student at the University of Texas at Dallas (UTD). Coding, reading, flim photography, and studying are the things that you will see me doing most. I am always learning and finding new hobbies, passions, and skills and this is my website to talk about, and showcase them all to you !{' '}
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                            My portfolio
                        </Button>
                    </NextLink>

                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <br></br>
                <BioSection>
                    <BioYear>2004</BioYear>
                    Born in Garland, Texas
                </BioSection>
                <BioSection>
                    <BioYear>2018-2022</BioYear>
                    Student at North Garland Highschool, started studying Computer Science getting proficient in both Java and Python
                </BioSection>
                <BioSection>
                    <BioYear>2022-Present</BioYear>
                    Studying computer science at UTD
                </BioSection>
            </Section>

            <Section dealy={0.3}>
                <Heading as="h3" variant="section-title">
                    Hobbies/Passions
                </Heading>
                <Paragraph>
                    <br></br>
                    Coding, Cyber Security, Film Photography, Music, and Learning, are on all the ever expanding list of things that I love to do and participate in. I am also currently looking to expand my knowledge relating to cyber-security, programming, and neuroscience. 
                </Paragraph>
            </Section>

            <Section delay = {0.3}>
                <Heading as = "h3" variant = "section-title">
                    On the web / Relevant Links
                </Heading>
                <List>
                    <ListItem> 
                    <Link href = "https://github.com/Coda39" target = "_blank">
                    <Button variant = "ghost" colorScheme = "teal" leftIcon = {<Icon as = {IoLogoGithub}/>} >
                        Coda39 
                    </Button>
                    </Link>  
                    </ListItem>
                    <ListItem>
                        <Link href = "https://www.docdroid.net/CIU8UVo/mateo-estrada-resume-pdf" target = "_blank">
                            <Button variant = "ghost" colorScheme = "teal" leftIcon = {<Icon as = {IoDocumentText}/>} >
                                Resume
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </Section>
        </Container>
        </Layout> 
    )
}



export default Page