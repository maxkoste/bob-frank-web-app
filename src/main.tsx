import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeContextProvider } from './theme/ContextProvider.tsx'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeContextProvider>
			<App />
		</ThemeContextProvider>
	</StrictMode>,
)
