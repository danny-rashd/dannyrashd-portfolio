import { Container, Box, Text, Heading, Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

const NotFound = () => {
  const mutedColor = useColorModeValue("gray.500", "slate.400");
  const cardBg = useColorModeValue("gray.50", "navy.800");
  const borderColor = useColorModeValue("gray.200", "navy.700");

  return (
    <Container maxW="container.md" pt={20}>
      <Text fontFamily="mono" fontSize="sm" color="accent" mb={4}>
        &gt; error: path not found
      </Text>

      <Heading
        as="h1"
        fontSize={{ base: "5xl", md: "7xl" }}
        fontWeight="bold"
        letterSpacing="tight"
        lineHeight="1"
        mb={3}
      >
        404
        <Box as="span" className="cursor">_</Box>
      </Heading>

      <Text fontFamily="mono" color={mutedColor} fontSize="sm" mb={10}>
        {'// the page you are looking for does not exist'}
      </Text>

      <Box
        p={4}
        bg={cardBg}
        border="1px solid"
        borderColor={borderColor}
        borderRadius="md"
        fontFamily="mono"
        fontSize="sm"
        display="inline-block"
      >
        <Text color={mutedColor} mb={2}>
          <Box as="span" color="accent">$</Box> suggested commands
        </Text>
        <Box>
          <Link
            as={NextLink}
            href="/"
            color="accent"
            _hover={{ opacity: 0.8 }}
            display="block"
            mb={1}
          >
            cd ~/home
          </Link>
          <Link
            as={NextLink}
            href="/bio"
            color="accent"
            _hover={{ opacity: 0.8 }}
            display="block"
            mb={1}
          >
            cd ~/about-me
          </Link>
          <Link
            as={NextLink}
            href="/projects"
            color="accent"
            _hover={{ opacity: 0.8 }}
            display="block"
          >
            cd ~/projects
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default NotFound;
