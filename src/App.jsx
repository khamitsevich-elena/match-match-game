import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import React from 'react'
import { RootRouter } from './rootrouter'
import { store } from './store'


export const App = () => (
	<BrowserRouter>
		<Provider store={store}>
			<RootRouter />
		</Provider>
	</BrowserRouter>
)

