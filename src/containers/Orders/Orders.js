import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        alert('Sorry, We are still working for a better user experience, You can check our demo version of how the orders look though!')
        axios.get('/orders.json').then(response => {
            const fetchedOrders = [];
            for (let key in response.data) {
                fetchedOrders.push({
                    ...response.data[key],
                    id: key
                })
            }
            console.log(response.data);
            this.setState({ loading: false, orders: fetchedOrders })
        })
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price} />                                                        
                ))};
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);