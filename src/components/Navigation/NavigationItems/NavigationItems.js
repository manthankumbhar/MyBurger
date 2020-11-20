import React, { Component } from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';

class NavigationItems extends Component {    

    render() {
        return (
            <ul className={classes.NavigationItems} >
                <NavigationItem link="/" active>Burger Builder</NavigationItem>
                <NavigationItem >Checkout</NavigationItem>
            </ul>            
            )
    }
}   

export default NavigationItems;