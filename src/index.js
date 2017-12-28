import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Search from './Component/Search'
import Header from './Component/Header'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import logger from 'redux-logger'
import {reducers} from './reducers/index'

const store = createStore(reducers,applyMiddleware(logger))

class Index extends Component {
    render(){
        return(
            <div>
                <Header />
                <Search />

            </div>
        )
    }
}

ReactDOM.render(<Provider store={store}><Index/></Provider>, window.document.getElementById('root'))
