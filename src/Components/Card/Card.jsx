import React from 'react'

export const Card = ({num,id,animation,pic,number,active, turnCard, checkCard}) => {
    const showCard = () => {
        if(active){
        turnCard(id, num)
        }
        setTimeout(() => {
        if(number.length===1){checkCard()}
       }, 300)
    }
	return (
      <img className={animation} width='100%' height='100%' onClick={showCard} src = {pic} alt='card'/>
	)
}