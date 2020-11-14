import {SET_USER,USER_EXIT, TURN_CARD, CHECK_CARD, SET_SHIRT, SET_DIFFICULTY, SET_NEWGAME,CLEAR_WINVALUE} from './actionTypes'
import {low,medium,high} from '../picture/card'
import {cardShirt} from '../picture/cardShirt'

// const cardData=[];
// for(let i=0;i<card.length;i++){
// 	cardData.push({id:i+1, srchange:card[i], active:true, up:true})
// 	cardData.push({id:i+1, srchange:card[i], active:true, up:true})
// } 

const getCards =(cardsAmount)=>{ //create array with diffuculty(cards amount)
	const cardData=[];
	const card = cardsAmount===10?low:cardsAmount===18?medium:high
	for(let i=0;i<card.length;i++){
	cardData.push({id:i+1, srchange:card[i], active:true, up:true})
	cardData.push({id:i+1, srchange:card[i], active:true, up:true})
	} 
	const CardDataWithCardsAmount=[];
	while(CardDataWithCardsAmount.length<=cardsAmount){
		for (const i of cardData) {
			CardDataWithCardsAmount.push(i)
		}
	}
	CardDataWithCardsAmount.length=cardsAmount;
	const arrayOfCards = CardDataWithCardsAmount.map(function(item,index) {
		return {...item,number:index+1}
	  });
	  arrayOfCards.sort(function(){
		return Math.random() - 0.5;
	  })
	return arrayOfCards
}

const initialState = {
	data : getCards(10),
	id: [],
	number:[],
	shirt:cardShirt,
	actualshirt:[cardShirt[0]],
	difficulty:[10,18,24],
	actiondifficulty:10,
	setactualshirt:cardShirt[0],
	setactiondifficulty:10,
	winValue:0,
	timer:0,
}

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER:
			return { ...state, user: action.user }
		case USER_EXIT:
			return { ...initialState, user:false}
		case TURN_CARD:
			if(state.number[0] && state.number[0]===action.number){ //if double click on one card nothing happen
				return {...state}
			}
			else
			for(let i=0;i<state.data.length;i++){ //else -> up=false -> show card(not shirt)
				if(state.data[i].number===action.number){
					state.data[i].up=false
				}
			}
			return{...state, id: [...state.id,action.id],number:[...state.number,action.number]}			
		case CHECK_CARD:
			if(state.id[0]===state.id[1]){ //if cards the same
			
				for(let i=0;i<state.data.length;i++){
					if(state.data[i].number===state.number[0] || state.data[i].number===state.number[1] ){
						state.data[i].active=false
					}
				}
			return{...state,number:[],id:[],winValue:state.winValue+2}
			}
			else if(state.number.length===2){ // if cards  not the same
				for(let i=0;i<state.data.length;i++){
					state.data[i].up=true
				}
				for(let i=0;i<state.data.length;i++){
				if(state.data[i].number===state.number[0] || state.data[i].number===state.number[1]){
					state.data[i].same=false
				}
			}
			return{...state,number:[],id:[]}
			}
			else
			return {...state}
		case SET_SHIRT:
			return{...state, setactualshirt:action.actualshirt}
		case SET_DIFFICULTY:
			return{...state,setactiondifficulty:action.difficulty}
		case SET_NEWGAME:
			const startTime = new Date()
			return{...state,
				data:getCards(state.setactiondifficulty), 
				actualshirt:state.setactualshirt,
				actiondifficulty:state.setactiondifficulty,
				winValue:0,
				timer:startTime.getTime()
				}
		case CLEAR_WINVALUE:
			return{...state,
				winValue:0
			}
		default:
			return {...state}
	}
}
