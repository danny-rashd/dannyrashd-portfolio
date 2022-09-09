import { Container, Box, Heading } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import mindmatics from '../public/mindmatics.webp'
import mesiniaga from '../public/mesiniaga.png'
import skymind from '../public/skymind.png'
const Home = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        color="white"
        bg="teal"
        p={3}
        mb={6}
        align="center"
      >
        Hi, I&apos;m a Software Engineer from Kuala Lumpur, Malaysia!
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h1" variant="page-title">
            Danial Rashid
          </Heading>
          <p>Software Engineer</p>
        <Link href="https://mindmatics.my/">
          <Image
            src={mindmatics}
            alt="Mindmatics"
            width={100}
            height={100}
          />
        </Link>
        <Link href="https://mesiniaga.com.my/">
          <Image
            src={mesiniaga}
            alt="mesiniaga"
            width={200}
            height={50}
          />
        </Link>
        <Link href="https://skymind.global/">
          <Image
            src={skymind}
            alt="Skymind"
            width={150}
            height={150}
          />
        </Link>
        </Box>
      </Box>
    </Container>
  );
};
export default Home;
