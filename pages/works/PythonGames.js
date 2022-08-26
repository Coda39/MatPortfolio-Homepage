import {Container, Heading, Badge, Link, List, ListItem} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import {Meta, WorkImage, Title, WorkGif} from '../../components/works'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Section from '../../components/section'
import {GridItem} from '@chakra-ui/react'
import P from '../../components/paragraph'


const Work = () => (
    <Layout title = "PythonGames">
        <Container>
            <Title>
                PythonGames <Badge>2021-2022</Badge>
            </Title>
            <WorkImage src ='/images/works/PythonGames_gif.gif' alt = 'PythonGame'/>
                <P>
                    Building games has been a central part of my highschool computer science 3 class. We do this by using Pygame a popular graphic and sound library 
                    which can be used with the Python programming languange.    
                </P>    
            <List ml = {4} my ={4}> 
                <ListItem>
                    <Meta>Pygame</Meta>
                    <Link href = "https://www.pygame.org/">
                        Pygame <ExternalLinkIcon mx = "2px"/>
                    </Link>
                </ListItem>
            </List>
            <P>
                We have done multiple labs to explore the various concepts of game programming. Such as Animation, Movement, and Collision.
            </P>
            <br></br>
            <WorkImage src = '/images/works/Collision.gif' alt = 'Collision'/>

        </Container>
    </Layout>
)

export default Work