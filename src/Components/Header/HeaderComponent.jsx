import React from 'react'
import { Link} from 'react-router-dom'
import { removeActualUser } from '../../localStorage'
import { Difficulty } from '../Difficulty'
import { ShirtCard } from '../Shirt'
import ModalTable from '../TopTable/Modal'
import './header.css'

export const HeaderComponent = ({setNewGame,userExit}) => {

  const exit=()=>{
    removeActualUser()
    userExit()
  }
	return (
    <div className='header'>
		<ShirtCard/>
    <Difficulty/>
    <ModalTable/>
    <Link className='headercomponent' to='/game' onClick={()=>setNewGame()}><font>New Game</font></Link>
    <Link className='headercomponent' onClick={exit}><font>Exit</font></Link>
		</div>
	)
}