import { Container, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-items";
import thumbInTheMoment from "../public/images/works/InTheMomentThumb.jpeg";
import thumbPhishBusters from "../public/images/works/PhishBusters.jpg";

import Layout from "../components/layouts/article";

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="InTheMoment"
              title="In The Moment"
              thumbnail={thumbInTheMoment}
            >
              Modern Mobile App that aims to help you take back your life.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="PhishBusters"
              title="Phish Busters Cyber Security Website"
              thumbnail={thumbPhishBusters}
            >
              Cyber Security themed Blog Page.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
