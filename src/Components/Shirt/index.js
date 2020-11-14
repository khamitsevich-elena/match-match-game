import { connect } from 'react-redux'
import { ShirtCardComponent} from './ShirtCards'
import { setShirt } from '../../store/actionCreators'

const mapStateToProps = (state) => {
	return {
        shirt: state.reducer.shirt,
	}
  }

const actionCreator = {
setShirt,
}

export const ShirtCard = connect(mapStateToProps, actionCreator)(ShirtCardComponent)