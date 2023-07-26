import {
  Container,
  Heading,
  Badge,
  Link,
  UnorderedList,
  List,
  ListItem,
} from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { Meta, WorkImage, Title, WorkGif } from "../../components/works";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Section from "../../components/section";
import { GridItem } from "@chakra-ui/react";
import P from "../../components/paragraph";

const Work = () => (
  <Layout title="InTheMoment">
    <Container>
      <Title>
        Phish Busters <Badge>Summer 2023</Badge>
      </Title>
      <WorkImage
        src="/images/works/PhishBusters.gif"
        alt="Phish Busters website"
      />
      <P>
        PhishBusters is a dynamic and informative blog page dedicated to
        unmasking and combatting online phishing threats. Its primary mission is
        to provide users with valuable, practical, and relevant information in a
        blog post style, all aimed at increasing awareness about phishing
        attacks and empowering readers to protect themselves in the digital
        landscape.
      </P>
      <br></br>
      <Link href="https://phish-busting.vercel.app/">
        Website
        <ExternalLinkIcon mx="4px" />
      </Link>
      <br></br>
      <Link href="https://github.com/Coda39/PhishBusting">
        Source Code
        <ExternalLinkIcon mx="4px" />
      </Link>
      <P>
        PhishBusters was built during the Summer 2023 Arizona State ALRISE
        Externship that I was apart of, It was built by a team of 4 undergrads,
        in the span of just under two weeks. I was the main person who worked on
        the website aspect of the project. Which included but was not limited
        to:
      </P>

      <br></br>

      <UnorderedList spacing={3}>
        <ListItem>
          Choosing the framework which to build the site with, which ended up
          being{" "}
          <Link href="https://kit.svelte.dev/">svelte and sveletekit</Link>
        </ListItem>
        <ListItem>
          Collaborating on the design and layout of the website
        </ListItem>
        <ListItem>
          All of the server side logic to be able to update the site with blog
          posts automatically as well as rendering markdown files on the site
          which where the main features of the website
        </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
);

export default Work;
