import { Box, Link, Typography } from '@mui/material'
import { useState } from 'react'
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';

const fontSize = 15

type ContentProps = {
    setRenderedContent: React.Dispatch<React.SetStateAction<React.ReactNode>>; // Specify the type of the renderedContent prop
};

function Navigation({setRenderedContent }: ContentProps) {

    const [value, setValue] = useState(0)

    return (
        <Box
            sx={{
                flex: 2,

                display: "flex",
                gap: 1,
                // justifyItems: "center",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
            <Link underline="none" onClick={() => { setRenderedContent(<Home/>) }}>
                <Typography sx={{ fontSize: fontSize }} >HOME</Typography>
            </Link>
            <Link underline="none" onClick={() => { setRenderedContent(<About/>) }}>
                <Typography sx={{ fontSize: fontSize }} >ABOUT</Typography>
            </Link>
            <Link underline="none" onClick={() => { setRenderedContent(<Contact/>)}}>
                <Typography sx={{ fontSize: fontSize }} >CONTACT</Typography>
            </Link>
        </Box>)
}

export default Navigation