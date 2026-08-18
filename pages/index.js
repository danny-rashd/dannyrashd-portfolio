import {
  Container,
  Box,
  Text,
  Heading,
  Avatar,
  Stack,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { bio } from "../lib/data";

const CTALink = ({ href, isExternal, children }) => (
  <Link
    as={isExternal ? undefined : NextLink}
    href={href}
    isExternal={isExternal}
    color="accent"
    fontFamily="mono"
    fontSize="sm"
    px={3}
    py={1.5}
    borderRadius="md"
    border="1px solid"
    borderColor="border.default"
    bg="bg.surface"
    _hover={{
      borderColor: "accent",
      transform: "translateY(-2px)",
      boxShadow: "sm",
    }}
    transition="all 0.2s"
  >
    {children}
  </Link>
);

const Home = () => {
  const avatarGlow = useColorModeValue(
    "0 0 0 2px #0d7377, 0 16px 32px -16px #0d737788",
    "0 0 0 2px #94e2d5, 0 16px 32px -16px #94e2d588"
  );
  const dotGrid = useColorModeValue(
    "radial-gradient(circle, #acb0be30 1px, transparent 1px)",
    "radial-gradient(circle, #585b7030 1px, transparent 1px)"
  );

  return (
    <Container maxW="container.md">
      <Box
        position="relative"
        display={{ md: "flex" }}
        alignItems="center"
        gap={10}
        mt={4}
        px={{ base: 4, md: 8 }}
        py={8}
        borderRadius="lg"
        bgImage={dotGrid}
        bgSize="20px 20px"
      >
        <Box flexGrow={1} className="fade-in-up">
          <Heading
            as="h1"
            fontSize={{ base: "4xl", md: "5xl" }}
            fontWeight="bold"
            letterSpacing="tight"
            lineHeight="1.1"
            mb={3}
          >
            {bio.name}
            <Box as="span" className="cursor">_</Box>
          </Heading>

          <Text fontFamily="mono" color="accent" fontSize="md" mb={1}>
            {'// '}{bio.role}
          </Text>
          <Text fontFamily="mono" color="text.muted" fontSize="sm" mb={6}>
            {'// '}{bio.location}
          </Text>

          <Text color="text.subtle" lineHeight="tall" fontSize="sm" mb={8}>
            {bio.summary}
          </Text>

          <Stack direction="row" spacing={3} flexWrap="wrap">
            <CTALink href="/bio">./about-me</CTALink>
            <CTALink href="/projects">./projects</CTALink>
            <CTALink href={bio.linkedin} isExternal>./linkedin</CTALink>
          </Stack>
        </Box>

        <Box
          flexShrink={0}
          mt={{ base: 10, md: 0 }}
          textAlign="center"
          className="fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <Avatar
            size="2xl"
            name={bio.name}
            src="/images/profile.png"
            boxShadow={avatarGlow}
            transition="box-shadow 0.3s"
          />
        </Box>
      </Box>

      <Box
        mt={10}
        borderRadius="md"
        border="1px solid"
        borderColor="border.default"
        overflow="hidden"
        fontFamily="mono"
        fontSize="sm"
        className="fade-in-up"
        style={{ animationDelay: "0.15s" }}
      >
        <Box
          px={4}
          py={2}
          borderBottom="1px solid"
          borderColor="border.default"
          bg="bg.subtle"
          display="flex"
          alignItems="center"
          gap={2}
        >
          <Box w={3} h={3} borderRadius="full" bg="red.400" />
          <Box w={3} h={3} borderRadius="full" bg="yellow.400" />
          <Box w={3} h={3} borderRadius="full" bg="green.400" />
          <Text fontSize="xs" color="text.muted" ml={2}>
            ~/current-focus.txt
          </Text>
        </Box>

        <Box p={4} bg="bg.surface">
          <Text color="text.muted" mb={1}>
            <Box as="span" color="accent">$</Box> cat current-focus.txt
          </Text>
          <Text color="text.subtle">
            Targeting <Box as="span" color="accent2" fontWeight="bold">Data Engineering</Box> roles.
            Currently building an end-to-end pipeline project and pursuing
            Azure DP-900. Open to pipeline architecture, warehouse design, and
            data platform work.
          </Text>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
