import { Box, Link, Typography } from '@mui/material';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';

const fontSize = 15;

type ContentProps = {
    setRenderedContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
};

function Navigation({ setRenderedContent }: ContentProps) {
    // Function to render links, improving scalability and reusability
    const renderLink = (label: string, Component: React.ReactNode) => (
        <Link 
            underline="none" 
            onClick={() => setRenderedContent(Component)}
            role="button" 
            sx={{ cursor: "pointer" }} 
        >
            <Typography sx={{ fontSize }}>{label}</Typography>
        </Link>
    );

    return (
        <Box
            sx={{
                flex: 2,
                display: "flex",
                gap: 1,
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            {renderLink("HOME", <Home />)}
            {renderLink("ABOUT", <About />)}
            {renderLink("CONTACT", <Contact />)}
        </Box>
    );
}

export default Navigation;
