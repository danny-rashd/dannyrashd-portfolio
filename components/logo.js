import Link from "next/link";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";

const Logo = () => {
  const textColor = useColorModeValue("gray.700", "slate.200");

  return (
    <Link href="/">
      <Box
        display="inline-flex"
        alignItems="center"
        fontFamily="mono"
        fontWeight="bold"
        fontSize="lg"
        letterSpacing="tight"
        _hover={{ opacity: 0.8 }}
        transition="opacity 0.2s"
        cursor="pointer"
      >
        <Text as="span" color="accent">&lt;</Text>
        <Text as="span" color={textColor}>DR</Text>
        <Text as="span" color="accent"> /&gt;</Text>
      </Box>
    </Link>
  );
};

export default Logo;
