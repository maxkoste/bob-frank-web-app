import { Container, Box } from '@mui/material'
import './App.css' //Bra att ha!
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import { useState } from 'react';
import Home from './components/Pages/Home';


import { CssBaseline, ThemeProvider } from '@mui/material';

import MainDisplay from './components/MainDisplay/MainDisplay'
import { useThemeContext } from './theme/ContextProvider';

function App() {
	const { theme } = useThemeContext()

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline enableColorScheme />
			<MainDisplay />
		</ThemeProvider>
	);
}

export default App
