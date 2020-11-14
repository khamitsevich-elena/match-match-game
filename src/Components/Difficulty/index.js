import { connect } from 'react-redux'
import { DifficultyComponent} from './DifficultyComponent'
import { setDifficulty } from '../../store/actionCreators'

const mapStateToProps = (state) => {
	return {
        difficulty: state.reducer.difficulty,
	}
  }

const actionCreator = {
setDifficulty
}

export const Difficulty = connect(mapStateToProps, actionCreator)(DifficultyComponent)