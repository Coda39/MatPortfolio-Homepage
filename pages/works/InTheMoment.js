import {
  Container,
  Heading,
  Badge,
  Link,
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
        In The Moment <Badge>Spring 2023</Badge>
      </Title>
      <WorkImage
        src="/images/works/in-the-moment.gif"
        alt="In the Moment Demo"
      />
      <P>
        In The Moment is a Mobile App that aims to reduce the amount of
        ineffective time that you spend on your phone and lets you live in the
        moment.
      </P>
      <br></br>
      <Link href="https://github.com/acm-projects/In-the-Moment">
        Source Code
        <ExternalLinkIcon mx="2px" />
      </Link>
      <P>
        This application was built as apart of the Spring 2023 ACM Projects
        program, with a team comprising of 4 individuals myself included,
        starting from scratch we had one semester to build out an app given a
        basic description of its functionality. I myself mainly focused on the
        backend side of the project, mainly handling User Authentication and
        server side logic.
      </P>
    </Container>
  </Layout>
);

export default Work;
