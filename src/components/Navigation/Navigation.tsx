import { Box, Link, Typography, styled } from '@mui/material';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';

const fontSize = 15;

// Styled component for AnimatedLink
const AnimatedLink = styled(Link)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    transition: 'color 0.3s ease',
    
    // Default link color (text color)
    '&:hover': {
        color: theme.palette.primary.main, // Hover color (change this to any color you prefer)
    },
    
    // Line style (after pseudo-element)
    '&::after': {
        content: '""',
        position: 'absolute',
        width: '0%',                  // Start with no width
        height: '2px',
        top: 0,                        // Keep it at the top of the link
        left: '50%',                   // Position it at the center
        backgroundColor: theme.palette.primary.main, // Line color (change this to any color you prefer)
        transform: 'scaleX(0)',         // Initially no scale
        transformOrigin: 'center',     // Scale from the center
        transition: 'transform 0.3s ease',
    },
    
    // On hover, expand the line to full width
    '&:hover::after': {
        transform: 'scaleX(1)',        // Expand the line to full width
        width: '100%',                 // Set full width of the link
        left: 0,                       // Align to the left of the element
    },
}));

type ContentProps = {
    setRenderedContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
};

function Navigation({ setRenderedContent }: ContentProps) {
    return (
        <Box
            sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 2
            }}
        >
            {[
                { label: 'HOME', Component: <Home /> },
                { label: 'ABOUT', Component: <About /> },
                { label: 'CONTACT', Component: <Contact /> }
            ].map((item) => (
                <AnimatedLink
                    key={item.label}
                    underline="none"
                    onClick={() => setRenderedContent(item.Component)}
                >
                    <Typography sx={{ fontSize }}>{item.label}</Typography>
                </AnimatedLink>
            ))}
        </Box>
    );
}

export default Navigation;
