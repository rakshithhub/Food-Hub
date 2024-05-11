import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            let existItem = state.cartItems.filter((item) => {
                if(item.id === action.payload.id){
                    return item;
                }else{
                    return null;
                }
            });

            if(existItem.length === 0 && existItem !== "null"){
                state.cartItems.push(action.payload);
            }else{
                state.cartItems = state.cartItems.map((item) => {
                    if(item.id === action.payload.id){
                        return {...item, qty: item.qty+1}
                    }else{
                        return item;
                    }
                })
            }

        },
        deleteItem: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id)
        },
        incrementQty: (state, action) => {
            state.cartItems = state.cartItems.map((item) => {
                if(item.id === action.payload.id){
                    return {...item, qty: item.qty+1}
                }else{
                    return item;
                }
            })
        },
        decrementQty: (state, action) => {
            state.cartItems = state.cartItems.map((item) => {
                if(item.id === action.payload.id){
                    if(item.qty > 0){
                        return {...item, qty: item.qty-1};
                    }else{
                        return item;
                    }
                }else{
                    return item;
                }
            })
        }
    }
});

export const {addItem, deleteItem, incrementQty, decrementQty} = cartSlice.actions;
export default cartSlice.reducer;