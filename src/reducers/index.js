import kode_sekolah_reducer from './kode_sekolah_reducer'
import detail_sekolah_reducer from './detail_sekolah_reducer'
import {combineReducers} from 'redux'

export const reducers = combineReducers({
    kode_sekolah_reducer,
    detail_sekolah_reducer

})
