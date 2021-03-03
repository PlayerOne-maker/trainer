import React,{Component} from "react";
import Header from "../../components/layouts/Header"
import Footer from "../../components/layouts/Footer"
import ProductForm from "../../components/pages/ProductForm"
import {connect} from "react-redux"
import {productCreate,productUpdate,productFetch} from "../../action"

class ProductEdit extends Component{

    
    
    componentDidMount(){
        if(this.props.match.params.id){
            this.props.productFetch(this.props.match.params.id)
        }
        
    }   

    render(){
        const {formValues,match,products,productUpdate,productCreate} = this.props;
        
        return(
            <div>
                <Header />
                <div className="container col-md-5">

                {match.path.indexOf("add") > 0 && (
                    <div>
                        <h2>Add</h2>
                    <ProductForm onProductSubmit={() => productCreate(formValues)}/>
                    </div>
                )}
                {match.path.indexOf("edit") > 0 && (
                     <div>
                     <h2>Edit</h2>
                 <ProductForm onProductSubmit={() => productUpdate(products.id,formValues)}/>
                 </div>
                )}
                </div>
                <Footer />
            </div>
        )
    }
}

function mapStateToProps({form,products}){
    return {formValues : form.ProductForm ? form.ProductForm.values : null ,products}
}

export default connect(mapStateToProps, {productFetch,productUpdate,productCreate})(ProductEdit);
