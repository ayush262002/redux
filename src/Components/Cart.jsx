import React from 'react'
import { UseSelector, useSelector } from 'react-redux'
function Cart() {
    const data = useSelector(state=>state);
  return (
    <div>
        {data == [] ? (<>Data Not Found</>) : (data?.map(ele=>(
            <div style={{display: 'flex'}}>
                <h1>{ele.price}</h1>
                <h1>{ele.name}</h1>
                <h1>{ele.quantity}</h1>
            </div>
        )))}
    </div>
  )
}

export default Cart