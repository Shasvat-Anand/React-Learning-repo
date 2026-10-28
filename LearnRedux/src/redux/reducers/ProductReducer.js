const initialState = {
    products:[],
}



 function ProductReducer(state = initialState, action){
    if(action.type === 'Add_Item'){
        console.log("I am working", action.payrole)
        console.log(state)
        
        return{
            products:[...state.products, action.payrole]
        }
    }
    else{
        return state;
    }
}


export default ProductReducer
