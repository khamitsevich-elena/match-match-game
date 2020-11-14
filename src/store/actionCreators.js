import {SET_USER, USER_EXIT, TURN_CARD, CHECK_CARD, SET_SHIRT, SET_DIFFICULTY, SET_NEWGAME, CLEAR_WINVALUE} from './actionTypes'

export const setUser = (user) => ({
	type: SET_USER,
	user
})

export const userExit = ()=> ({
	type: USER_EXIT,
})

export const turnCard = (id, number) => ({
	type: TURN_CARD,
	id,
	number
})

export const checkCard = () => ({
	type: CHECK_CARD,
})

export const setShirt = (actualshirt) => ({
	type: SET_SHIRT,
	actualshirt
})

export const setDifficulty = (difficulty) => ({
	type: SET_DIFFICULTY,
	difficulty
})

export const setNewGame = () => ({
	type: SET_NEWGAME
})

export const clearWinvalue  = () => ({
	type: CLEAR_WINVALUE
})