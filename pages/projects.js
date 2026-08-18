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
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { projects } from "../lib/data";

const ProjectCard = ({ project }) => {
  return (
    <Box
      bg="bg.surface"
      border="1px solid"
      borderColor="border.default"
      borderRadius="md"
      overflow="hidden"
      mb={4}
      _hover={{ borderColor: "accent", boxShadow: "md", transform: "translateY(-3px)" }}
      transition="all 0.2s"
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
        <Text fontFamily="mono" fontSize="xs" color="text.muted" ml={2}>
          ~/{project.title}
        </Text>
      </Box>

      <Box p={5}>
        <Text fontSize="sm" color="text.subtle" lineHeight="tall" mb={4}>
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
              color="text.muted"
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
              color="text.muted"
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
      <Heading as="h1" variant="page-title" mb={6} className="fade-in-up">
        Projects
      </Heading>
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </Container>
  );
};

export default Projects;
