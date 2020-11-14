import React from 'react'
import {CardOne} from '../../Components/Card'
import { Header } from '../../Components/Header'
import { setResult } from '../../localStorage'
import './cards.css'

export const Cards = ({win,actiondifficulty,actualshirt,data,winValue,timer,clearWinvalue}) => {
        if(winValue===actiondifficulty){
                const finish=new Date()
                setResult((finish.getTime()-timer)/1000,actiondifficulty)
                clearWinvalue()
        }
	return (
        <>
        <Header/>
        <div className={'containerGame'}>
    <div className={`gridContainer${actiondifficulty}`}>
    {data.map((card)=>((card.active===false)?<><CardOne animation = 'opacityAnimation' pic={card.srchange}/></>:
    (card.up===false)?<>
    <CardOne animation = 'turnON' num={card.number} id={card.id} active={card.active} pic={card.srchange}/></>:
    (card.up===true && card.same === false)?<>
    <CardOne animation = 'turnOFF' num={card.number} id={card.id} active={card.active} pic={actualshirt}/></>:
    <><CardOne num={card.number} id={card.id} active={card.active} pic={actualshirt}/></>))}
        </div>
        {win===true?<div className='congratulations'>You are Winner!</div>:<div></div>}
        </div>
        </>
)
}
