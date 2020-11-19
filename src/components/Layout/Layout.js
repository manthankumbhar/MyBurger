import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'; 
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }
        

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    openMenuHandler = () => {
        this.setState({ showSideDrawer: true })
    }

    render() {
        return (
            <Aux>
                <Toolbar menu={this.openMenuHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
};
    
    
    
export default Layout;