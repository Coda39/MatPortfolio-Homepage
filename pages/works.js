import {Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-items'
import thumbPythongame from '../public/images/works/DodgeRunner_Python.png'
import thumbCyberSec from '../public/images/works/CyberSec.png'
import Layout from '../components/layouts/article'
const Works = () => {
    return (
        <Layout>
        <Container> 
         <Heading as = "h3" fontSize = {20} mb = {4}> 
            Works 
         </Heading>
         <SimpleGrid columns = {[1,1,2]} gap = {6}> 
         <Section>
            <WorkGridItem id = "PythonGames" title = "Python Games" thumbnail={thumbPythongame}>
                Making 2d games using Python and the Pygame library  
            </WorkGridItem>
         </Section>
         <Section>
             <WorkGridItem id = "CyberSec" title = "CyberSecurity" thumbnail = {thumbCyberSec}>
                 Learning CyberSecurity through PLTW and creating infographics to help promote smart Cyber use. 
             </WorkGridItem>
         </Section>
         </SimpleGrid>
        </Container>
       </Layout>
    )
}

export default Works 