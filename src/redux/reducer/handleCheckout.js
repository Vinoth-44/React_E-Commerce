const checkout = {}

const handleCheckout = (state=checkout, action) =>{
    const checkout = action.payload;
    switch(action.type){
        case "checkout":
            return {...state,checkout}
            break;
        default:
            return state
            break;
    }
}

export default handleCheckout