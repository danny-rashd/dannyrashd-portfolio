import { Box, Container, Stack, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { bio, resumeConfig } from "../lib/data";

const getResumeUrl = () => {
  const now = new Date();
  const switchDate = new Date(resumeConfig.switchDate);
  return now >= switchDate ? resumeConfig.after : resumeConfig.before;
};

const Footer = () => {
  const borderColor = useColorModeValue("gray.200", "navy.700");
  const mutedColor = useColorModeValue("gray.400", "slate.400");
  const resumeUrl = getResumeUrl();

  return (
    <Box borderTop="1px solid" borderColor={borderColor} mt={16}>
      <Container maxW="container.md" py={6}>
        <Stack
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          spacing={4}
          fontFamily="mono"
          fontSize="xs"
          color={mutedColor}
        >
          <Text>
            <Box as="span" color="accent">~/</Box>
            {bio.name.toLowerCase().replace(" ", "-")} © {new Date().getFullYear()}
          </Text>

          <Stack direction="row" spacing={5} flexWrap="wrap" justify="center">
            <Link href={`mailto:${bio.email}`} _hover={{ color: "accent" }}>
              email
            </Link>
            <Link href={bio.linkedin} isExternal _hover={{ color: "accent" }}>
              linkedin <ExternalLinkIcon />
            </Link>
            <Link href={resumeUrl} download="Danial_Rashid_Resume.pdf" _hover={{ color: "accent" }}>
              resume <ExternalLinkIcon />
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
