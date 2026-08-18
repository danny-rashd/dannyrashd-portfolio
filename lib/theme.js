import { extendTheme } from "@chakra-ui/react";

// Catppuccin Mocha (dark) + Latte (light)
// https://github.com/catppuccin/catppuccin
const mocha = {
  base:     "#1e1e2e",
  mantle:   "#181825",
  crust:    "#11111b",
  surface0: "#313244",
  surface1: "#45475a",
  surface2: "#585b70",
  overlay0: "#6c7086",
  overlay1: "#7f849c",
  text:     "#cdd6f4",
  subtext0: "#a6adc8",
  subtext1: "#bac2de",
  teal:     "#94e2d5",
  green:    "#a6e3a1",
  blue:     "#89b4fa",
  mauve:    "#cba6f7",
  peach:    "#fab387",
  red:      "#f38ba8",
  yellow:   "#f9e2af",
};

const latte = {
  base:     "#eff1f5",
  mantle:   "#e6e9ef",
  crust:    "#dce0e8",
  surface0: "#ccd0da",
  surface1: "#bcc0cc",
  surface2: "#acb0be",
  overlay0: "#9ca0b0",
  overlay1: "#8c8fa1",
  text:     "#4c4f69",
  subtext0: "#6c6f85",
  subtext1: "#5c5f77",
  teal:     "#179299",
  green:    "#40a02b",
  blue:     "#1e66f5",
  mauve:    "#8839ef",
  peach:    "#fe640b",
  red:      "#d20f39",
};

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    navy: {
      900: mocha.base,
      800: mocha.surface0,
      700: mocha.surface1,
      600: mocha.surface2,
    },
    slate: {
      400: mocha.subtext0,
      300: mocha.subtext1,
      200: mocha.text,
    },
  },
  fonts: {
    heading: `'JetBrains Mono', 'Fira Code', monospace`,
    body:    `'JetBrains Mono', 'Fira Code', monospace`,
    mono:    `'JetBrains Mono', 'Fira Code', monospace`,
  },
  styles: {
    global: (props) => ({
      body: {
        bg:    props.colorMode === "dark" ? mocha.base    : latte.base,
        color: props.colorMode === "dark" ? mocha.text    : latte.text,
      },
      "::selection": {
        background: props.colorMode === "dark" ? `${mocha.teal}33` : `${latte.teal}33`,
      },
    }),
  },
  semanticTokens: {
    colors: {
      // accent switches between modes — #0d7377 passes 5.3:1 contrast on Latte base
      accent:           { default: "#0d7377",       _dark: mocha.teal },
      grassTeal:        { default: "#0d7377",       _dark: mocha.teal },
      // secondary accent, used sparingly for emphasis (e.g. one highlighted phrase)
      accent2:          { default: latte.mauve,     _dark: mocha.mauve },
      "bg.canvas":      { default: latte.base,      _dark: mocha.base },
      "bg.surface":     { default: latte.surface0,  _dark: mocha.surface0 },
      "bg.subtle":      { default: latte.surface1,  _dark: mocha.surface1 },
      "border.default": { default: latte.surface1,  _dark: mocha.surface1 },
      "text.primary":   { default: latte.text,      _dark: mocha.text },
      "text.muted":     { default: latte.subtext0,  _dark: mocha.subtext0 },
      "text.subtle":    { default: latte.subtext1,  _dark: mocha.subtext1 },
    },
  },
  components: {
    Heading: {
      variants: {
        "page-title": {
          fontSize: { base: "2xl", md: "3xl" },
          fontWeight: "bold",
          letterSpacing: "tight",
        },
      },
    },
    Link: {
      baseStyle: {
        _hover: { textDecoration: "none" },
      },
    },
    Badge: {
      baseStyle: {
        fontFamily: "mono",
        fontWeight: "normal",
        borderRadius: "sm",
        textTransform: "none",
      },
    },
  },
});

export default theme;
