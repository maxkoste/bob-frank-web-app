import { Box, Link, Typography, styled } from '@mui/material';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';

const fontSize = 15;

const AnimatedLink = styled(Link)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    transition: 'color 0.3s ease',
    '&:hover': {
        color: theme.palette.primary.main,
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '2px',
        top: 0 ,
        left: '50%',
        backgroundColor: theme.palette.primary.main,
        transform: 'scaleX(0)',
        transformOrigin: 'center',
        transition: 'transform 0.3s ease',
    },
    '&:hover::after': {
        transform: 'scaleX(1)',
        width: '100%',
        left: 0,
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
