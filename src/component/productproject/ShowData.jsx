import React from 'react'

export default function ShowData(props) {
    console.log("showdata",props.products)


  return (
    <div>
       <ul>
        {
            props.products.map((pro,idx)=>(
                <li key={pro.id}>{` Product Name${pro.productName} Product Price ${pro.productPrice} `
                } 
                 <button onClick={()=>props.onDelete(pro.id)}  style={{ marginLeft: '10px',backgroundColor:"black" }}>DELETE</button></li>
               

            )

            )
        }
       </ul>
      
    </div>
  )
}
