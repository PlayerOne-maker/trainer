import React,{ Component } from 'react';
import Footer from '../../components/layouts/Footer';
import Header from '../../components/layouts/Header';
import ProductList from '../../components/pages/Productlist';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {productsFetch,productDelete} from "../../action"

class Product extends Component{

    constructor(props){
        super(props);
        this.delProduct = this.delProduct.bind(this)
        this.editProduct = this.editProduct.bind(this)
    }

    editProduct(product){
        this.props.history.push('product/edit/' + product.id)
    }

    componentDidMount(){
        this.props.productsFetch();
    }

    delProduct(product){
        this.props.productDelete(product.id);
    
    }


    
    render(){
        return(
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-6">
                    <h1>Product</h1>
                    </div>
                    <div className="col-6">
                    <button className="btn btn-success title float-right" onClick={() => this.props.history.push('product/add')}>
                        Add
                    </button>
                    </div>
                </div>

                {this.props.products && Array.isArray(this.props.products)&&
                <ProductList products={this.props.products}
                onDelProduct={this.delProduct} onEditProduct={this.editProduct} />
            }
                </div>
                
                <Footer />
            </div>
        )
    }
}

function mapStateToProps({products}) {
    return{products};
}

export default withRouter(connect(mapStateToProps,{productsFetch,productDelete})(Product));