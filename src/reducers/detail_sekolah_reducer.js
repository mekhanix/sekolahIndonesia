import {GET_SEKOLAH_LIST, SELECT_SEKOLAH} from '../actions/index'

export default function (state={}, action) {
    switch (action.type) {
    case GET_SEKOLAH_LIST:
        return Object.assign({}, state, action.results)
    case SELECT_SEKOLAH:
        return Object.assign({},state, action)
    default:
        return state
    }
}