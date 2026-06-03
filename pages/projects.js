import {
  Container,
  Box,
  Heading,
  Text,
  Badge,
  Wrap,
  WrapItem,
  Link,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { projects } from "../lib/data";

const ProjectCard = ({ project }) => {
  const cardBg = useColorModeValue("gray.50", "navy.800");
  const borderColor = useColorModeValue("gray.200", "navy.700");
  const mutedColor = useColorModeValue("gray.500", "slate.400");

  return (
    <Box
      bg={cardBg}
      border="1px solid"
      borderColor={borderColor}
      borderRadius="md"
      overflow="hidden"
      mb={4}
      _hover={{ borderColor: "accent" }}
      transition="border-color 0.2s"
    >
      <Box
        px={4}
        py={2}
        borderBottom="1px solid"
        borderColor={borderColor}
        display="flex"
        alignItems="center"
        gap={2}
      >
        <Box w={3} h={3} borderRadius="full" bg="red.400" />
        <Box w={3} h={3} borderRadius="full" bg="yellow.400" />
        <Box w={3} h={3} borderRadius="full" bg="green.400" />
        <Text fontFamily="mono" fontSize="xs" color={mutedColor} ml={2}>
          ~/{project.title}
        </Text>
      </Box>

      <Box p={5}>
        <Text
          fontSize="sm"
          color={useColorModeValue("gray.600", "slate.300")}
          lineHeight="tall"
          mb={4}
        >
          {project.description}
        </Text>

        <Wrap spacing={2} mb={4}>
          {project.tech.map((t) => (
            <WrapItem key={t}>
              <Badge
                fontFamily="mono"
                fontSize="xs"
                bg="transparent"
                color="accent"
                border="1px solid"
                borderColor="accent"
                px={2}
                py={0.5}
              >
                {t}
              </Badge>
            </WrapItem>
          ))}
        </Wrap>

        <Stack direction="row" spacing={5}>
          {project.github && (
            <Link
              href={project.github}
              isExternal
              fontFamily="mono"
              fontSize="xs"
              color={mutedColor}
              _hover={{ color: "accent" }}
              display="flex"
              alignItems="center"
              gap={1}
            >
              github <ExternalLinkIcon />
            </Link>
          )}
          {project.demo && (
            <Link
              href={project.demo}
              isExternal
              fontFamily="mono"
              fontSize="xs"
              color={mutedColor}
              _hover={{ color: "accent" }}
              display="flex"
              alignItems="center"
              gap={1}
            >
              live demo <ExternalLinkIcon />
            </Link>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

const Projects = () => {
  return (
    <Container maxW="container.md">
      <Heading as="h1" variant="page-title" mb={6}>
        Projects
      </Heading>
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </Container>
  );
};

export default Projects;
