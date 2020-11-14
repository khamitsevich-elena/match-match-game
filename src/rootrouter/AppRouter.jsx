import React, { useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { CardRouter } from '../pages/Game'
import { Authorization } from '../pages/Authorization'
import { Rules } from '../pages/Rules/Rules'
import { getActualUser } from '../localStorage'
import 'antd/dist/antd.css';
import './app.css'

export const AppRouter = ({user}) => {
	const history = useHistory()
	useEffect(() => {
		user || getActualUser() ? history.push('/game') : history.push('/')
	}, [history,user])
	return (
		<div className='main'>
			<Switch>
				<Route path='/game' component={CardRouter}/>                  
				<Route path='/authorization' component={Authorization}/>
				<Rules/>
			</Switch>
		</div>
	)
}

