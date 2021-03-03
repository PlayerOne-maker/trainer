import {PRODUCTS_FETCH, PRODUCT_CREATE, PRODUCT_FETCH, PRODUCT_UPDATE} from "../action/types"

export default function (state = [], action) {
    switch(action.type){
    case PRODUCTS_FETCH :
    case PRODUCT_FETCH:
        return action.payload;
    case PRODUCT_CREATE:
        return {saved : true,msg: "Save"}
    case PRODUCT_UPDATE:
        return {...state,saved : true,msg : "save"}
    default:
        return state;
    }
}