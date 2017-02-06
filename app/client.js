/**
 * Created by andresrojas on 2/2/17.
 */
import React from 'react'
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import ReactDom from 'react-dom'
import { Provider } from "react-redux"
import store from './store'

import Layout from './Pages/Layout'
import Index from './Pages/Index'
import About from './Pages/About'


ReactDom.render(
    <Provider store={store} >
        <Router history={hashHistory}>
            <Route path='/' component={Layout}>
                <IndexRoute component={Index}></IndexRoute>
                <Route path="about" component={About}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
)