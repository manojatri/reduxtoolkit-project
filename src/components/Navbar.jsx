import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const items = useSelector((state)=>state.cart)
  return (
    <div style={{padding:"10px", backgroundColor:"beige", fontSize:"16px", lineHeight:"30px", display:"flex", justifyContent:"center" }}>
        <div style={{width:"1200px", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            <div style={{fontSize:"25px", fontWeight:"bolder"}}>Redux Tutorial</div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:"20px", fontWeight:"bolder"}}>
                <Link to="/" style={{color:"red", textDecoration:"none"}}>Home</Link>
                <Link to="/cart" style={{color:"red", textDecoration:"none"}}>Cart</Link>
                <span>Items : {items.length}</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar