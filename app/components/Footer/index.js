/**
 * Created by andresrojas on 2/2/17.
 */
import React from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';

export default class Footer extends React.Component{
    constructor(){
        super();
    }

    render(){
        const favoritesIcon = <FontIcon className="material-icons"></FontIcon>;
        return(
            <Paper zDepth={1}>
                <BottomNavigation>
                    <BottomNavigationItem
                        label="Created by Andrés Rojas All rights reserved &copy;"
                        icon={favoritesIcon}
                    />
                </BottomNavigation>
            </Paper>
        )
    }
}