import Head from "next/head";
import Navbar from "../navbar.js";
import Footer from "../footer.js";
import { Box, Container } from "@chakra-ui/react";
import { bio } from "../../lib/data";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8} minH="100vh">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={bio.summary} />
        <meta property="og:title" content={`${bio.name} — Portfolio`} />
        <meta property="og:description" content={bio.summary} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dannyrashd.vercel.app" />
        <meta property="og:image" content="/api/og" />
        <title>{bio.name} — Portfolio</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={24} pb={8}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Main;
