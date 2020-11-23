import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            house: '',
            pincode:''
        },
        loading:false
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Manthan',
                address: {
                    place: 'R.H.3',
                    zipcode: '400708',
                    country: 'India'
                },
                email: 'kum.manthan@gmail.com'
            },
            delivery: 'Express-Delivery'
        }
        axios.post('/orders.json', order).then(Response => {
            this.setState({ loading: false });
            this.props.history.push('/');
        });    
    }
    

    render() {
        let form = (
            <form>
                <input type="text" className={classes.Input} name="name" placeholder="Your Name" />
                <input type="email" className={classes.Input} name="email" placeholder="Your Mail" />
                <input type="text" className={classes.Input} name="house" placeholder="House" />
                <input type="number" className={classes.Input} name="pincode" placeholder="Pincode" />
                <Button btnType="Success" clicked={this.orderHandler} >ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData} >
                <h4>Enter your contact details</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;