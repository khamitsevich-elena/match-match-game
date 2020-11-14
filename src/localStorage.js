export const setUserinLocalStorage=(user)=>{
		let localNames = localStorage.getItem("names")?JSON.parse(localStorage.getItem("names")):[]
		let i=0;
		for (const el of localNames) {
			if(el.name===user){
				i=i+1
			}
		}
		if(i===0){
		localNames.push({name:user,id:localNames.length+1})
		let localNamesNew = JSON.stringify(localNames)
		localStorage.setItem("names", localNamesNew)
		let actualUser = JSON.stringify({name:user,id:localNames.length})
		localStorage.setItem("actualUser", actualUser)
		}
		else{
			for (const el of localNames) {
				if(el.name===user){
					let actualUser=JSON.stringify({name:el.name,id:el.id})
					localStorage.setItem("actualUser", actualUser)
				}
			}
		}
	}
export const removeActualUser=()=>{
	localStorage.removeItem("actualUser")
}
export const getActualUser=()=>{
	 return JSON.parse(localStorage.getItem("actualUser"))
}
export const setResult=(time,difficulty)=>{
	let games = localStorage.getItem("games")?JSON.parse(localStorage.getItem("games")):[]
	let actualUser=JSON.parse(localStorage.getItem("actualUser"))
	games.push({id: actualUser.id, time,difficulty})
	localStorage.setItem("games", JSON.stringify(games))
}
export const getTable=()=>{
	let topTable =[]
	let games = JSON.parse(localStorage.getItem("games"))
	let users = JSON.parse(localStorage.getItem("names"))
	if(games){
	games.sort((a, b) => a.time - b.time)
	for (const game of games) {
		for (const user of users) {
			if(user.id===game.id){
				topTable.push({time:game.time,name:user.name,difficulty:game.difficulty})
			}
		}
	}
	localStorage.setItem('topTable',JSON.stringify(topTable))
}
}