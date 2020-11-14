import { connect } from 'react-redux'
import { HeaderComponent } from './HeaderComponent'
import {setNewGame,userExit} from '../../store/actionCreators'

const mapStateToProps = (state) => {
	return {
        winValue: state.reducer.winValue,
	}
  }

const actionCreator = {
	setNewGame,
	userExit,
}

export const Header = connect(mapStateToProps, actionCreator)(HeaderComponent)