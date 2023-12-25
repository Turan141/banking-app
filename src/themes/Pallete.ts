import { createTheme } from "@mui/material";
import {
  backgroundNeutralBackgroundBottom,
  backgroundNeutralBackgroundDefault,
  contentNeutralContentPrimary,
  contentNeutralContentQuaternary,
} from "./Styleguides.js";

// Define your shared components
const components = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        userSelect: "none",
        overscrollBehavior: "contain",
      },
    },
  },
};

// Define common typography options
const commonTypography = {
  typography: {
    fontFamily: "'SF Pro Display', Arial, sans-serif",
  } as CustomTypographyOptions,
};

// Define common palette values
const commonPalette = {
  light: {
    default: {
      main: "#FFFFFF",
    },
    bgRear: {
      main: backgroundNeutralBackgroundBottom,
    },
    bgFront: {
      main: backgroundNeutralBackgroundDefault,
    },
    light2: {
      main: "#FFFFFF",
    },
    contentPrimary: {
      main: contentNeutralContentPrimary,
    },
    contentQuaternary:{
      main: contentNeutralContentQuaternary
    },
    dark4: {
      main: "#222730",
    },
    backgroundMain: {
      main: "#FFFFFF",
    },
    accountLineLight: {
      main: "#DADADA",
    },
    headerText: {
      main: "#FFFFFF",
    },
    verticalBarGraph: {
      main: "#F36D6E",
    },
    countryListBg: {
      main: "rgb(37, 40, 51)",
    },
    verticalBarText: {
      main: "white",
    },
    sideMenuButtonText: {
      main: "#F7F9FA",
    },
    iconVButton: {
      main: "#919BA8",
    },
    text: {
      primary: "#222730",
      secondary: "#515866",
    },
    textGray: {
      color: {
        main: "#919BA8",
      },
      darkShade: "#515866",
      lightShade: "#919BA8",
    },
    depositScreenBG: {
      main: "#1A1E26",
    },
    redUnderline: {
      main: "#FF0000",
    },
    // ... other light mode palette values
  },
  dark: {
    contentPrimary: {
      main: contentNeutralContentPrimary,
    },
    dark2: {
      main: backgroundNeutralBackgroundDefault,
    },
    // ... other dark mode palette values
  },
};

// Create light theme
export const lightTheme = createTheme({
  palette: {
    ...commonPalette.light,
  },
  components: components,
  ...commonTypography,
});

// Create dark theme
export const darkTheme = createTheme({
//   palette: {
//     ...commonPalette.dark,
//   },
  components: components,
  ...commonTypography,
});
