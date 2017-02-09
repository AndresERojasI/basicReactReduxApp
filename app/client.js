/**
 * Created by andresrojas on 2/2/17.
 */
import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import ReactDom from 'react-dom'
import { Provider } from "react-redux"
import store from './store'

import Layout from './Pages/Layout'
import Index from './Pages/Index'
import About from './Pages/About'

injectTapEventPlugin();

ReactDom.render(
    <Provider store={store} >
        <Router history={hashHistory}>
            <Route component={Layout} path="/">
                <IndexRoute component={Index} />
                <Route path="about" component={About}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
)