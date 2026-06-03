import Logo from "./logo";
import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { bio } from "../lib/data";

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const mutedColor = useColorModeValue("gray.500", "slate.400");

  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      target={target}
      fontFamily="mono"
      fontSize="sm"
      color={active ? "accent" : mutedColor}
      borderBottom={active ? "1px solid" : "1px solid transparent"}
      borderColor={active ? "accent" : "transparent"}
      pb="2px"
      _hover={{ color: "accent", borderColor: "accent" }}
      transition="all 0.2s"
      {...props}
    >
      {children}
    </Link>
  );
};

const NavBar = (props) => {
  const { path } = props;
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#eff1f5cc", "#1e1e2ecc");
  const borderColor = useColorModeValue("gray.200", "navy.700");

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={bg}
      borderBottom="1px solid"
      borderColor={borderColor}
      style={{ backdropFilter: "blur(12px)" }}
      zIndex={10}
      {...props}
    >
      <Container
        display="flex"
        py={4}
        px={{ base: 5, md: 6 }}
        maxW="container.md"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={10}>
          <Logo />
        </Flex>

        <Stack
          direction="row"
          display={{ base: "none", md: "flex" }}
          alignItems="center"
          spacing={8}
          flexGrow={1}
        >
          <LinkItem href="/bio" path={path}>
            ./about
          </LinkItem>
          <LinkItem href="/projects" path={path}>
            ./projects
          </LinkItem>
          <LinkItem href={bio.github} path={path} target="_blank">
            ./github
          </LinkItem>
        </Stack>

        <Flex align="center" gap={4} ml={4}>
          <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="outline"
            size="md"
            borderColor={useColorModeValue("gray.300", "navy.600")}
            color={useColorModeValue("gray.500", "slate.400")}
            _hover={{ borderColor: "accent", color: "accent", bg: "transparent" }}
            transition="all 0.2s"
          />
          <Box display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                size="sm"
                aria-label="Menu"
                borderColor={useColorModeValue("gray.300", "navy.600")}
                color={useColorModeValue("gray.500", "slate.400")}
                _hover={{ borderColor: "accent", color: "accent" }}
              />
              <MenuList
                bg={useColorModeValue("white", "navy.800")}
                borderColor={useColorModeValue("gray.200", "navy.700")}
                fontFamily="mono"
                fontSize="sm"
              >
                <MenuItem
                  as={NextLink}
                  href="/bio"
                  _hover={{ color: "accent", bg: "transparent" }}
                >
                  ./about
                </MenuItem>
                <MenuItem
                  as={NextLink}
                  href="/projects"
                  _hover={{ color: "accent", bg: "transparent" }}
                >
                  ./projects
                </MenuItem>
                <MenuItem
                  as={NextLink}
                  href={bio.github}
                  target="_blank"
                  _hover={{ color: "accent", bg: "transparent" }}
                >
                  ./github
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default NavBar;
