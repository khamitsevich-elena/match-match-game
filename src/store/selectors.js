import { createSelector } from 'reselect'

const dataSelector = (state) => state.reducer.data
const winValueSelector = (state) => state.reducer.winValue

export const getwinValueSelector = createSelector(
	dataSelector, winValueSelector,
	(data, winValue) => {
	console.log('inside function')
	const newData = data.filter((item)=>item.active===false)
	if(newData.length===data.length){
		return true
	}
	return false
	},
)