import {Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {GridItem} from '../components/grid-items'
///import path from 'path'
//import fs from 'fs'
//import matter from 'gray-matter'



const Posts = () => (
    <Layout title = "Posts">
        <Container>
            <Heading as = "h4" fontSize = {20} mb = {4}>
             Posts
            </Heading>
            <Section delay = {0.1}>
                <SimpleGrid columns = {[1,2,2]} gap = {6}>
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Posts
