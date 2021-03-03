
export default ({input , type , label , required,meta:{touched , error}}) => {
   
    return(
        <div className="form-group">
            <label className="title">{label}</label>
            <input className="form-control" {...input} required={required} type={type}></input>
           {error && touched &&
            <div className="text-danger title">{error}</div>
            }
        </div>
    )
}