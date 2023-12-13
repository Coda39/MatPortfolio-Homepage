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
  <Layout title="Comet Cupboard Design Challenge">
    <Container>
      <Title>
        Comet Cupboard Design Challenge <Badge>Fall 2023</Badge>
      </Title>
    </Container>
    <Heading>Background</Heading>
    <P>
      AIGA is the American Institute of Graphic Arts and their UTD chapter holds
      a design challenge where, given a prompt students attempt a design in any
      medium they choose and have to create and present their design infront of
      judges and bystanders, in a design exchange. The prompt this semester was
      to design something that would help promote and improve the comet
      cupboard.
    </P>
    <br></br>
    <Heading>The Problem</Heading>
    <P>
      After me and my team visited the Comet Cupboard and talked with the
      various volunteers we learned that majority of the students who took food
      from the comet cupboard where choosing rather unhealthy and quick to
      consume options. Things like ramen, chips and snacks which are low in
      nutritional value and aren't satiating, which - to no ones suprise -
      aren't good for growing and learning college students.
    </P>
    <br></br>
    <Heading>Our Solution</Heading>
    <P>
      Both me and my partners wanted to tackle this issue by revamping the comet
      cupboard website so that its not only a hub for information, but also so
      it can have some usefull tools that let us guide students in their chose
      of food.
    </P>
    <br></br>
    <p>
      Our design was ultimately based on other large food pantries but we also
      wanted to add a modern flair that helped make the website more user
      friendly and established a clearer tone.
    </p>
    <br></br>
    <p>
      We also created a proof of concept for a recipe page which would aim to
      combat the amount of largely unhealthy options students would pick in the
      comet cupboard. The page would show various recipes that had ingredients
      that were in stock in the comet cupboard. Allowing for students to pick
      out confidently which ingredients would allow them to create dishes that
      where both healthier and that where more satiating.
    </p>
    <br></br>
    <UnorderedList>
      <ListItem>
        <Link href="https://comet-cupboard.vercel.app/">
          Website
          <ExternalLinkIcon mx="4px" />
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://github.com/Coda39/Comet-Cupboard">
          Source Code
          <ExternalLinkIcon mx="4px" />
        </Link>
      </ListItem>
    </UnorderedList>
    <br></br>
    <P>
      The website was built with Sveltekit and majority of the design and mock
      up of what we wanted the look and feel of the site to be was done in
      Figma.
    </P>

    <br></br>
    <Heading>Results</Heading>
    <P>
      Presenting at the design exchange was both nerveracking and exciting and I
      am glad of what me and my team had accomplished. Our design solution was
      able to catch the attention of both the judges and the multiple attendees
      who visited our booth and who we had the pleasure to talk to.
    </P>
    <br></br>
    <P>
      So much so that we ended up winning the Peoples Choice award at the event.
    </P>
    <br></br>
    <WorkImage
      src="/images/works/Teamates.jpeg"
      alt="Me and my teamates being given the reward"
    ></WorkImage>
    <br></br>
    <P>
      Overall I am so grateful to AIGA for holding this design challenge which
      will definetely be something that I will attempt to participate in the
      future, and I am grateful to have such wonderful teamates that stuck with
      me through all the trails and tribulations.
    </P>
    <br></br>
    <Heading>Teamates</Heading>
    <UnorderedList>
      <ListItem>
        <Link href="https://www.linkedin.com/in/long-vu-44072a23a/">
          Long Vu
          <ExternalLinkIcon mx="4px" />
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://www.linkedin.com/in/peter-tran-866a33228/">
          Peter Tran
          <ExternalLinkIcon mx="4px" />
        </Link>
      </ListItem>
    </UnorderedList>
  </Layout>
);
export default Work;
