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

const Home = () => {
  const mutedColor = useColorModeValue("gray.500", "slate.400");
  const cardBg = useColorModeValue("gray.50", "navy.800");

  return (
    <Container maxW="container.md">
      <Box display={{ md: "flex" }} alignItems="center" gap={10} mt={4}>
        <Box flexGrow={1}>
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
          <Text fontFamily="mono" color={mutedColor} fontSize="sm" mb={6}>
            {'// '}{bio.location}
          </Text>

          <Text
            color={useColorModeValue("gray.600", "slate.300")}
            lineHeight="tall"
            fontSize="sm"
            mb={8}
          >
            {bio.summary}
          </Text>

          <Stack direction="row" spacing={4} flexWrap="wrap">
            <Link
              as={NextLink}
              href="/bio"
              color="accent"
              fontFamily="mono"
              fontSize="sm"
              borderBottom="1px solid"
              borderColor="accent"
              pb="1px"
              _hover={{ opacity: 0.8 }}
            >
              ./about-me
            </Link>
            <Link
              as={NextLink}
              href="/projects"
              color="accent"
              fontFamily="mono"
              fontSize="sm"
              borderBottom="1px solid"
              borderColor="accent"
              pb="1px"
              _hover={{ opacity: 0.8 }}
            >
              ./projects
            </Link>
            <Link
              href={bio.linkedin}
              isExternal
              color="accent"
              fontFamily="mono"
              fontSize="sm"
              borderBottom="1px solid"
              borderColor="accent"
              pb="1px"
              _hover={{ opacity: 0.8 }}
            >
              ./linkedin
            </Link>
          </Stack>
        </Box>

        <Box flexShrink={0} mt={{ base: 10, md: 0 }} textAlign="center">
          <Avatar
            size="2xl"
            name={bio.name}
            src="/images/profile.png"
            border="2px solid"
            borderColor="accent"
            bg={cardBg}
          />
        </Box>
      </Box>
      <Box
        mt={10}
        p={4}
        bg={cardBg}
        borderRadius="md"
        borderLeft="3px solid"
        borderColor="accent"
        fontFamily="mono"
        fontSize="sm"
      >
        <Text color={mutedColor} mb={1}>
          <Box as="span" color="accent">$</Box> cat current-focus.txt
        </Text>
        <Text color={useColorModeValue("gray.700", "slate.200")}>
          Targeting Data Engineering roles. Currently building an end-to-end
          pipeline project and pursuing Azure DP-203. Open to pipeline
          architecture, warehouse design, and data platform work.
        </Text>
      </Box>
    </Container>
  );
};

export default Home;
