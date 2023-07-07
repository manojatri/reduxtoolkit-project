import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    SUCCESS:'SUCCESS',
    ERROR:'ERROR',
    LOADING:'LOADING'
})

const productSlice = createSlice({
    name:"Product",
    initialState:{
        data:[],
        status:STATUSES.SUCCESS
    },

    reducers:{
        setProducts(state, action){
            state.data = action.payload
        },
        setStatus(state, action){
            state.status = action.payload
        }
    }
})

export const {setProducts, setStatus} = productSlice.actions

export default productSlice.reducer


// Calling API by MIDDLEWARE

export function fetchproducts(){
    return async function fetchproductThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const res = await fetch("https://fakestoreapi.com/products")
            const resdata = await res.json();
            dispatch(setProducts(resdata))
            dispatch(setStatus(STATUSES.SUCCESS))
        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}