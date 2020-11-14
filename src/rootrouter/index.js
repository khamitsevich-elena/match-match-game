import { connect } from 'react-redux'
import { AppRouter } from './AppRouter'

const mapStateToProps = (state) => {
	return {
		user: state.reducer.user,
	};
  };

const actionCreator = {
}

export const RootRouter = connect(mapStateToProps, actionCreator)(AppRouter)
