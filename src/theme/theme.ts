import { PaletteMode } from "@mui/material";
import { amber, deepOrange, grey } from "@mui/material/colors";

const theme = {
    palette: {
        primary: amber,
    },
};

export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === "light"
            ? {
                primary: amber,
                divider: amber[200],
                text: {
                    primary: "#f77f00",
                    secondary: grey[800],
                },
            }
            : {
                primary: deepOrange,
                divider: deepOrange[700],
                background: {
                    default: "#143D4C",
                },
                text: {
                    primary: "#fff",
                    secondary: grey[500],
                },
            }),
        typography: {
            fontFamily: "'Josefine Sans', sans-serif",
            h4: {
                fontFamily: "'Josefin Sans', sans-serif",
                fontWeight: 600,
            },
        }
    },
});

export default theme;