import React, { useEffect } from 'react'
import { add } from '../Redux/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchproducts, STATUSES } from '../Redux/ProductSlice';



const Home = () => {
    const {data:dataItems, status} = useSelector((state) => state.product);

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchproducts());
    },[])

    const handleAdd = (product) => {
        dispatch(add(product))
    }

    if(status === 'LOADING'){
        return <h1>Loading ....</h1>
    }

  return (
    <div className='container'>
        <h1 style={{marginBottom:"20px", textAlign:"center", fontSize:"50px", fontWeight:"lighter"}}>Product List</h1>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"20px"}}>
            {
                dataItems.map((product)=>{

                    const {id, image, title, price} = product;
                    
                    return (
                        <div style={{border:"1px solid #ccc", padding:"10px 50px", display:"flex", flexDirection:"column", gap:"10px", justifyContent:"center", alignItems:"center"}} key={id}>
                            <img src={image} alt={title} style={{height:"70px", width:"auto"}} />
                            <h4>{title}</h4>
                            <h5>{price}</h5>
                            <button style={{}} onClick={()=>handleAdd(product)}>Add to Cart</button>
                        </div>
                    )
            })}
        </div>
    </div>
  )
}

export default Home