// Defaults: https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",

      service: {
        green: { DEFAULT: "#E6F3EC", dark: "#B3DCC6", darker: "#008941" },
        orange: { DEFAULT: "#FFE9C9", dark: "#FFD79D", darker: "#f29023" },
        red: { DEFAULT: "#FCE6E6", dark: "#E10600" },
        gray: { DEFAULT: "#F5F5F5", dark: "#D5D5D5", darker: "#2E2E2E" },
        violet: { DEFAULT: "#F5F0FD", dark: "#EBE3FB", darker: "#5B12EB" },
        blue: {
          DEFAULT: "#DBF0FF",
          dark: "#000091",
          light: "#F0F8FF",
          info: "#0762c8",
        },

        available: { DEFAULT: "#86F3A2", dark: "#005B17" },
        unavailable: { DEFAULT: "#FF9A6C", dark: "#AF0000" },
      },
      blue: {
        light: "#F0F8FF",
      },
      gray: {
        bg: "#F8F8F8",
        "00": "#F5F5F5",
        "01": "#E0E0E0",
        "02": "#D5D5D5",
        "03": "#CCCCCC",
        dark: "#2E2E2E",
        text: { DEFAULT: "#555555", alt: "#999999", alt2: "#777777" },
      },
      "france-blue": "#000091",
      white: "#FFFFFF",
      "marianne-red": "#E1000F",
      magenta: {
        brand: "#9C6FF4",
        hover: "#7B40F0",
        cta: "#5B12EB",
        dark: "#19004a",
        80: "#AF8EF3",
        60: "#C3AAF6",
        40: "#D7C6F9",
        20: "#EBE3FB",
        10: "#F5F0FD",
      },
      info: { DEFAULT: "hsl(212,93%,46%)", light: "hsl(212,93%,97%)" },
      success: { DEFAULT: "hsl(148,100%,27%)", light: "hsl(148,100%,97%)" },
      warning: { DEFAULT: "hsl(32,100%,46%)", light: "hsl(32,100%,97%)" },
      error: { DEFAULT: "#e00700", light: "hsl(2,100%,97%)" },
      available: { DEFAULT: "#008941", dark: "#1cda76" },
      na: { DEFAULT: "#e10600", dark: "#ff504c" },
      wait: { DEFAULT: "#f29023", dark: "#fe9800" },
    },
    fontFamily: {
      sans: ["Marianne"],
    },
    fontSize: {
      f10: ".625rem",
      f12: ".75rem",
      f14: ".875rem",
      f16: "1rem",
      f17: "1.0625rem",
      f18: "1.125rem",
      f19: "1.1875rem",
      f20: "1.25rem",
      f21: "1.3125rem",
      f22: "1.375rem",
      f23: "1.4375rem",
      f24: "1.5rem",
      f26: "1.625rem",
      f28: "1.75rem",
      f30: "1.875rem",
      f32: "2rem",
      f38: "2.375rem",
      f45: "2.8125rem",
    },
    lineHeight: {
      none: "1",
      tight: "1.2",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.7",
      loose: "2",
      12: ".75rem",
      16: "1rem",
      20: "1.25rem",
      24: "1.5rem",
      28: "1.75rem",
      32: "2rem",
      36: "2.25rem",
      40: "2.5rem",
      48: "3rem",
      56: "3.5rem",
    },
    spacing: {
      s0: "0",
      s2: "0.125rem",
      s4: "0.25rem",
      s6: "0.375rem",
      s8: "0.5rem",
      s9: "0.5625rem",
      s10: "0.625rem",
      s12: "0.75rem",
      s16: "1rem",
      s20: "1.25rem",
      s24: "1.5rem",
      s28: "1.75rem",
      s32: "2rem",
      s35: "35px",
      s40: "2.5rem",
      s48: "3rem",
      s56: "3.5rem",
      s64: "4rem",
      s72: "4.5rem",
      s80: "5rem",
      s88: "5.5rem",
      s96: "6rem",
      s112: "7rem",
      s160: "10rem",
      s512: "32rem",
    },
    borderRadius: {
      none: "0",
      DEFAULT: "0.25rem", // 4px
      md: "0.5rem", // 8px
      ml: "1rem", // 16px
      lg: "1.5rem", // 12px
      xl: "2.5rem", // 40px
      full: "9999px",
    },
    boxShadow: {
      none: "none",
      xs: "0 1px 0 0 rgba(0, 0, 0, 0.05)",
      sm: "0 0 1px 0  rgba(0, 0, 0, 0.05), 0 2px 1px 0 rgba(0, 0, 0, 0.05)",
      md: "0 2px 10px 0 rgba(0, 0, 0, 0.1), 0 0 2px 0 rgba(0, 0, 0, 0.2)",
      l: "0 4px 20px 0 rgba(0, 0, 0, 0.15), 0 0 3px 0 rgba(0, 0, 0, 0.1)",
      xl: "0 0 4px rgba(0, 0, 0, 0.1), 0px 8px 40px rgba(0, 0, 0, 0.2);",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)",
      focus: "0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px #0A76F6",
    },
  },
  corePlugins: {
    fontVariantNumeric: false,
  },
  plugins: [require("@tailwindcss/typography")],
};

module.exports = config;
