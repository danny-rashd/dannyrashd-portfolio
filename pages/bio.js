import {
  Container,
  Box,
  Heading,
  Text,
  Badge,
  Wrap,
  WrapItem,
  Link,
  Divider,
  useColorModeValue,
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
  const borderColor = useColorModeValue("gray.200", "navy.700");
  const cardBg = useColorModeValue("gray.50", "navy.800");
  const mutedColor = useColorModeValue("gray.500", "slate.400");

  return (
    <Box display="flex" gap={4} mb={isLast ? 0 : 8}>
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
          <Box w="1px" flexGrow={1} bg={borderColor} mt={2} />
        )}
      </Box>

      <Box flexGrow={1} pb={isLast ? 0 : 2}>
        <Box display="flex" alignItems="center" gap={3} mb={1}>
          <Box
            bg={cardBg}
            borderRadius="sm"
            p={1}
            border="1px solid"
            borderColor={borderColor}
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
              color={useColorModeValue("gray.800", "slate.200")}
              _hover={{ color: "accent" }}
            >
              {item.company}
            </Link>
            <Text fontFamily="mono" fontSize="xs" color={mutedColor}>
              {item.role}
            </Text>
          </Box>
          <Text
            fontFamily="mono"
            fontSize="xs"
            color={mutedColor}
            ml="auto"
            flexShrink={0}
          >
            {item.period}
          </Text>
        </Box>

        <Text
          fontSize="sm"
          color={useColorModeValue("gray.600", "slate.300")}
          mb={3}
          lineHeight="tall"
        >
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
  const cardBg = useColorModeValue("gray.50", "navy.800");
  const borderColor = useColorModeValue("gray.200", "navy.700");
  const skillColor = useColorModeValue("gray.600", "slate.300");
  const skillBorderColor = useColorModeValue("gray.300", "navy.600");

  return (
    <Box
      bg={cardBg}
      border="1px solid"
      borderColor={borderColor}
      borderRadius="md"
      p={4}
      fontFamily="mono"
      fontSize="sm"
      flex={1}
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
              color={skillColor}
              border="1px solid"
              borderColor={skillBorderColor}
              px={2}
              py={0.5}
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
  const primaryColor = useColorModeValue("gray.800", "slate.200");
  const secondaryColor = useColorModeValue("gray.600", "slate.300");
  const tertiaryColor = useColorModeValue("gray.500", "slate.400");
  const mutedColor = useColorModeValue("gray.400", "slate.400");

  return (
    <Box fontFamily="mono" fontSize="sm" mb={2}>
      <Text color={primaryColor} fontWeight="bold">{item.institution}</Text>
      <Text color={secondaryColor}>{item.degree}</Text>
      {item.major && (
        <Text color={tertiaryColor} fontSize="xs">{item.major}</Text>
      )}
      <Text color={mutedColor} fontSize="xs">
        {item.period}{item.note ? ` · ${item.note}` : ""}
      </Text>
    </Box>
  );
};

const CertItem = ({ cert }) => {
  const primaryColor = useColorModeValue("gray.800", "slate.200");
  const mutedColor = useColorModeValue("gray.500", "slate.400");

  return (
    <Box fontFamily="mono" fontSize="sm" mb={2}>
      <Text color={primaryColor}>{cert.title}</Text>
      <Text color={mutedColor} fontSize="xs">{cert.issuer}</Text>
    </Box>
  );
};

const Bio = () => {
  return (
    <Container maxW="container.md">
      <Heading as="h1" variant="page-title" mb={3}>
        About Me
      </Heading>
      <Text
        fontSize="sm"
        color={useColorModeValue("gray.600", "slate.300")}
        lineHeight="tall"
      >
        {bio.summary}
      </Text>

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
