import { connect } from 'react-redux'
import { Cards } from './Cards'
import { clearWinvalue} from '../../store/actionCreators'
import { getwinValueSelector } from '../../store/selectors'

const mapStateToProps = (state) => {
	return {
	  id: state.reducer.id,
	  number:state.reducer.number,
	  data: state.reducer.data,
	  actualshirt: state.reducer.actualshirt,
	  actiondifficulty:state.reducer.actiondifficulty,
	  winValue:state.reducer.winValue,
	  timer:state.reducer.timer,
	  win: getwinValueSelector(state)
}
}
const actionCreator = {
	clearWinvalue
}

export const CardRouter = connect(mapStateToProps, actionCreator)(Cards)
