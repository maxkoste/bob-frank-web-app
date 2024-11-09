import { Box, Typography, Link } from "@mui/material";
import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import Social from "../Social/Social";

type ContentProps = {
    setRenderedContent: React.Dispatch<React.SetStateAction<React.ReactNode>>; // Specify the type of the renderedContent prop
};

function Header({setRenderedContent }: ContentProps) {

    return (
        <Box
            border={"2px solid"}
            sx={{
                width: "100%",
                display: "flex",
            }}
        >
            <Logo />
            <Navigation setRenderedContent={setRenderedContent} />
            <Social />
        </Box>
    )
}

export default Header