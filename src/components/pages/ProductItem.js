import React,{Component} from "react";

//Fuctional Component
// const ProductItem = (props) => {
//     const {Productname, Productprice} = props;
//     return(
//         <div>
//             <p>{Productname}</p>
//             <p>{Productprice}</p>
//         </div>
//     )
// }

// Class Component
class ProductItem extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {productName, unitPrice, thumbnail} = this.props.product;
        return (
            <div className="col-md-3 col-sm-6">
                <img className="img-fluid img-thumbnail" src={thumbnail} />
                <h5 className="mt-2">{productName}</h5>
                <p className="title text-right" >{unitPrice} THB</p>
                {this.props.onAddOrder &&
                <button className="btn btn-block btn-success title" onClick={() => this.props.onAddOrder(this.props.product)} >
                    Buy
                </button>
                }
                {(this.props.onDelProduct || this.props.onEditProduct ) &&
                 <button className="btn btn btn-secondary col-md-6 title" onClick={() => this.props.onEditProduct(this.props.product)} >
                    Edit
                </button> 
                }
                {(this.props.onDelProduct || this.props.onEditProduct ) &&
                <button className="btn btn btn-danger col-md-6  title" onClick={() => this.props.onDelProduct(this.props.product)} >
                    Delete
                </button>
                }
                <hr />
            </div>
        )
    }
}

export default ProductItem