import React from "react";

const Footer =(props) =>{
    const {company , email} = props;

    return (
    <div className="container-fluid">
        <hr />
            <div className="text-center title text-uppercase">
               <span className="text-danger">Power By {company}</span> 
               <span className="text-muted"> {email}   </span>
            </div>
        </div>)
}

export default Footer;