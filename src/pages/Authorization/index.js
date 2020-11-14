import { connect } from 'react-redux'
import { AuthorizationComponent } from './Authorization'
import {setUser,setNewGame} from '../../store/actionCreators'

const actionCreator = {
    setUser,
    setNewGame
}

export const Authorization = connect(null, actionCreator)(AuthorizationComponent)
