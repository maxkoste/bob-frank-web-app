
import { Box } from '@mui/material'
import './App.css' //Bra att ha!

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
