import {
  Container,
  Box,
  Heading,
  Text,
  Badge,
  Wrap,
  WrapItem,
  Link,
} from "@chakra-ui/react";
import Image from "next/image";
import { bio, experience, education, certifications, skills } from "../lib/data";

const SectionLabel = ({ children }) => (
  <Text
    fontFamily="mono"
    fontSize="xs"
    color="accent"
    letterSpacing="widest"
    textTransform="uppercase"
    mb={4}
    mt={10}
  >
    &gt; {children}
  </Text>
);

const ExperienceItem = ({ item, isLast }) => {
  return (
    <Box
      display="flex"
      gap={4}
      mb={isLast ? 0 : 8}
      p={3}
      mx={-3}
      borderRadius="md"
      transition="background-color 0.2s"
      _hover={{ bg: "bg.subtle" }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        flexShrink={0}
        pt={1}
      >
        <Box
          w="10px"
          h="10px"
          borderRadius="full"
          bg="accent"
          flexShrink={0}
        />
        {!isLast && (
          <Box w="1px" flexGrow={1} bg="border.default" mt={2} />
        )}
      </Box>

      <Box flexGrow={1} pb={isLast ? 0 : 2}>
        <Box display="flex" alignItems="center" gap={3} mb={1}>
          <Box
            bg="bg.surface"
            borderRadius="sm"
            p={1}
            border="1px solid"
            borderColor="border.default"
            flexShrink={0}
            w="50px"
            h="40px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src={item.logo}
              alt={item.company}
              width={52}
              height={28}
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          </Box>
          <Box>
            <Link
              href={item.url}
              isExternal
              fontFamily="mono"
              fontWeight="bold"
              fontSize="sm"
              color="text.primary"
              _hover={{ color: "accent" }}
            >
              {item.company}
            </Link>
            <Text fontFamily="mono" fontSize="xs" color="text.muted">
              {item.role}
            </Text>
          </Box>
          <Text
            fontFamily="mono"
            fontSize="xs"
            color="text.muted"
            ml="auto"
            flexShrink={0}
          >
            {item.period}
          </Text>
        </Box>

        <Text fontSize="sm" color="text.subtle" mb={3} lineHeight="tall">
          {item.description}
        </Text>

        <Wrap spacing={2}>
          {item.tags.map((tag) => (
            <WrapItem key={tag}>
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
                {tag}
              </Badge>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </Box>
  );
};

const SkillGroup = ({ label, items }) => {
  return (
    <Box
      bg="bg.surface"
      border="1px solid"
      borderColor="border.default"
      borderRadius="md"
      p={4}
      fontFamily="mono"
      fontSize="sm"
      flex={1}
      transition="all 0.2s"
      _hover={{ borderColor: "accent", boxShadow: "sm", transform: "translateY(-2px)" }}
    >
      <Text color="accent" fontSize="xs" mb={3}>
        # {label}
      </Text>
      <Wrap spacing={2}>
        {items.map((skill) => (
          <WrapItem key={skill}>
            <Badge
              fontFamily="mono"
              fontSize="xs"
              bg="transparent"
              color="text.subtle"
              border="1px solid"
              borderColor="border.default"
              px={2}
              py={0.5}
              transition="border-color 0.2s"
              _hover={{ borderColor: "accent" }}
            >
              {skill}
            </Badge>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

const EducationItem = ({ item }) => {
  return (
    <Box fontFamily="mono" fontSize="sm" mb={2}>
      <Text color="text.primary" fontWeight="bold">{item.institution}</Text>
      <Text color="text.subtle">{item.degree}</Text>
      {item.major && (
        <Text color="text.muted" fontSize="xs">{item.major}</Text>
      )}
      <Text color="text.muted" fontSize="xs">
        {item.period}{item.note ? ` · ${item.note}` : ""}
      </Text>
    </Box>
  );
};

const CertItem = ({ cert }) => {
  return (
    <Box fontFamily="mono" fontSize="sm" mb={2}>
      <Text color="text.primary">{cert.title}</Text>
      <Text color="text.muted" fontSize="xs">{cert.issuer}</Text>
    </Box>
  );
};

const Bio = () => {
  return (
    <Container maxW="container.md">
      <Box className="fade-in-up">
        <Heading as="h1" variant="page-title" mb={3}>
          About Me
        </Heading>
        <Text fontSize="sm" color="text.subtle" lineHeight="tall">
          {bio.summary}
        </Text>
      </Box>

      <SectionLabel>experience</SectionLabel>
      <Box>
        {experience.map((item, i) => (
          <ExperienceItem
            key={item.company}
            item={item}
            isLast={i === experience.length - 1}
          />
        ))}
      </Box>

      <SectionLabel>education</SectionLabel>
      {education.map((item) => (
        <EducationItem key={item.institution} item={item} />
      ))}

      <SectionLabel>certifications</SectionLabel>
      {certifications.map((cert) => (
        <CertItem key={cert.title} cert={cert} />
      ))}

      <SectionLabel>skills</SectionLabel>
      <Box display={{ md: "flex" }} gap={4} flexWrap="wrap">
        {Object.entries(skills).map(([label, items]) => (
          <SkillGroup key={label} label={label} items={items} />
        ))}
      </Box>
    </Container>
  );
};

export default Bio;
