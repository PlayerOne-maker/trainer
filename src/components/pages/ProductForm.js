import react ,{Component} from 'react'
import {reduxForm,Field} from "redux-form"
import FormFeild from "../common/FormFeild";
import {productForm} from "./FormFeild"
import {connect} from "react-redux"

class ProductForm extends Component {

    renderFields (productForm){
        
        return productForm.map(({label,name,type,required}) => {
            return(
            <Field key={name} label={label} name={name} type={type} className="form-control" required={required} component={FormFeild}/>
            )
        })
    }


    render(){
        const {onProductSubmit} = this.props;
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(onProductSubmit)}>
                   {this.renderFields(productForm)}
                   <button className="btn btn-block btn-success title">
                       Save
                   </button>
                </form>
            </div>
        )
    }
}

function  validate(values) {
    const errors = {};
    productForm.forEach(({name,required}) => {
        if(!values[name] && required){
            errors[name] = 'กรอกด้วย';
        }
});
return errors;
}

function mapStateToProps({products}){
    if(products && products.id){
        return {initialValues : products};
    }else{
        return {};
    }
    
}


ProductForm = reduxForm ({ validate,form : "productForm"})(ProductForm);

export default connect(mapStateToProps)(ProductForm);