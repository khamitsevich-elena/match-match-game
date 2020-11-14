import React from 'react'
import { Button } from 'antd'
import {Link} from 'react-router-dom'
import './rules.css'

export const Rules = () => {

return (<>
<div className='rulesHeader'></div>
    <div className={'container'}>
        <div className='rules'>
        <span className='text'>How to play:</span><br></br>
        Memory is a counter game where the object is to find pairs.<br></br>
        When the game begins, all pictures are hidden.<br></br>
        <span className='text'>To Play:</span><br></br>
        <li>Select two cards to try to match the pictures.</li>
        <li>If you match the pictures you can go again.</li>
        <li>If they don't match it is the computer turn them.</li>
        <li>The player that finds all pairs wins!</li>
        <li>Have Fun!</li>
        </div>
    <Link to='/authorization'><Button className='playButton' type="primary">Play</Button></Link>
    </div>
    </>
)
}