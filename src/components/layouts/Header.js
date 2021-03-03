import React,{Component} from "react";
import { Router } from "react-router-dom";
import {Link} from 'react-router-dom'

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {date : new Date()};   
    }
    
    componentDidMount(){
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentDidUpdate(){

    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({date : new Date()})
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 text-left">
                        <img src="/images/Sinotrans.png"></img>
                        <h1 className="text-info">HR&Sinotrans</h1>
                    </div>
                    <div className="col-md-4 text-muted text-right h2">
                         {this.state.date.toLocaleTimeString()}
                    </div>
                </div>
                <hr />
                <ul className="list-inline">
                    <li className="list-inline-item title"><Link to="/">Home</Link></li> 
                    | <li className="list-inline-item title"><Link to="/order">Order</Link></li>
                    | <li className="list-inline-item title"><Link to="/product">Product</Link></li> 
                    | <li className="list-inline-item title"><Link to="/about">About Us</Link></li>
                </ul>
            </div>
        )
    }
}

export default Header;