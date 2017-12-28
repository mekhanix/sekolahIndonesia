import { GET_KODE_WILAYAH, SELECT_TINGKAT, SELECT_DAERAH } from '../actions/index'

export default function (state={}, action) {
    switch (action.type) {
    case GET_KODE_WILAYAH:
        return Object.assign({}, state, {wilayah:action.wilayah.data}, {selected_daerah:''}, {tingkat:'sd'})
    case SELECT_DAERAH:
        return Object.assign({}, state, {wilayah:state.wilayah}, {selected_daerah:action.objectDaerah})
    case SELECT_TINGKAT:
        return Object.assign({}, state, {wilayah:state.wilayah}, {selected_daerah:state.selected_daerah}, {tingkat:action.tingkat})
    default:
        return state
    }
}