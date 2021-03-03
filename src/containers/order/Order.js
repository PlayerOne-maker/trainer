import React,{ Component } from 'react';
import Footer from '../../components/layouts/Footer';
import Header from '../../components/layouts/Header';
import {connect} from "react-redux"
import {ordersFetch,orderDelete} from "../../action"

class Order extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.ordersFetch();
    }

    delOrder(order){
        this.props.orderDelete(order.id);
    }

    showOrders(){
        return this.props.orders && this.props.orders.map(order =>{
            const date = new Date(order.orderedDate);
            return(
                <div key={order.id} className="col-md-3 col-sm-6">
                    <hr />
                    <p className="text-right">
                        <button className="btn btn-danger" onClick={() => this.delOrder(order)}>X</button>
                    </p>
                    <h5>
                        วันที่ {date.toLocaleDateString()} {date.toLocaleTimeString()}
                    </h5>
                    <ul>
                        {order.orders && order.orders.map(record =>{
                            return (<li>
                                {record.product.productName} x {record.quantity} 
                                = {record.product.unitPrice * record.quantity}
                            </li>)
                        })}
                    </ul>
                    <p className="title">total {order.totalPrice}</p>
                </div>
            )
        })
    }
    
    render(){
        return(
            <div>
                <Header />
                <div className="container-fluid">
                    <h1>Invoice List</h1>
                    <div className="row"> 
                        {this.showOrders()}
                    </div>
                </div>
                <Footer />
            </div>

        )
    }
}

function mapStateToProps({orders}){
    return {orders};
}

export default connect(mapStateToProps,{orderDelete,ordersFetch})(Order);
