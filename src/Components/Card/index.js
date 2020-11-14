import { connect } from 'react-redux'
import { Card } from './Card'
import { turnCard,checkCard } from '../../store/actionCreators'

const mapStateToProps = (state) => {
	return {
		number: state.reducer.number,
		actiondifficulty: state.reducer.actiondifficulty
	}
  }

const actionCreator = {
	turnCard,
	checkCard
}

export const CardOne = connect(mapStateToProps, actionCreator)(Card)