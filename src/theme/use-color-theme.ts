import React from "react";

import { createTheme, PaletteMode } from "@mui/material";

import { getDesignTokens } from "./theme";

export const useColorTheme = () => {
    const [mode, setMode] = React.useState<PaletteMode>("dark");

    const toggleColorMode = () =>
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

    const modifiedTheme = React.useMemo(
        () => createTheme(getDesignTokens(mode)),
        [mode]
    );

    return {
        theme: modifiedTheme,
        mode,
        toggleColorMode,
    };
};