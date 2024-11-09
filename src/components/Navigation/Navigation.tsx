import { Box, Link, Typography } from '@mui/material';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';

const fontSize = 15;

type ContentProps = {
    setRenderedContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
};

function Navigation({ setRenderedContent }: ContentProps) {

    return (
        <Box
            sx={{
                display: "flex",
                gap: 2,
                justifyContent: "space-between",
                alignItems: "center"
            }}
        >
            {[
                { label: 'HOME', Component: <Home /> },
                { label: 'ABOUT', Component: <About /> },
                { label: 'CONTACT', Component: <Contact /> }
            ].map((item) => (
                <Link
                    key={item.label}
                    underline="none"
                    onClick={() => setRenderedContent(item.Component)}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        transition: 'transform 0.3s ease, color 0.3s ease', // Add transition
                        '&:hover': {
                            color: 'primary.main',       // Change color on hover
                            transform: 'scale(1.1)',     // Scale up slightly on hover
                        }
                    }}
                >
                    <Typography sx={{ fontSize }}>{item.label}</Typography>
                </Link>
            ))}
        </Box>
    );
}

export default Navigation;
