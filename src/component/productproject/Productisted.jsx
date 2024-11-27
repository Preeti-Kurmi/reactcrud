// import React, { useState } from 'react'
// import ShowData from './ShowData';

// export default function Productisted() {
// const [productId,setProductId]=useState('');
// const [productPrice,setProductPrice]=useState('');
// const [productName,setProductName]=useState("");
// const [formData,setFormData]=useState([]);



// const addSubmitHandler=async(e)=>{
//     e.preventDefault();
//     const data={
//         id:productId,
//         productName:productName,
//         productPrice:parseInt(productPrice),
//     }
//     setFormData((prev)=>[...prev,data])
  

//     setProductId('')
//     setProductName('')
//     setProductPrice('')
// }

// const onDeleteHandler=(id)=>{
//     const upadatedData=formData.filter((pro)=>
//    pro.id !==id)
//     setFormData(upadatedData)

// }



//   return (
//     <div className='bg-red-700 flex flex-row gap-10 p-10'>
//         <div>
      
//       <form className='bg-red-700 flex flex-row gap-10' onSubmit={addSubmitHandler}>
//     <div>
//         <label htmlFor="productid">Product ID</label>
//         <input type="text" name="productid" id="productid" value={productId} onChange={(e)=>setProductId(e.target.value)} />
//     </div>
  
//     <div>
//         <label htmlFor="Sellingprice">Selling Price</label>
//         <input type="text" name="sellingprice" id="sellingprice"  value={productPrice} onChange={(e)=>setProductPrice(e.target.value)}/>
//     </div>
//     <div>
//         <label htmlFor="ProductName">ProductName</label>
//         <input type="productname" name="productname" id="productname" value={productName} onChange={(e)=>setProductName(e.target.value)} />
//     </div>

// <div>
//     <button type='submit' > Add Product</button>
    
// </div>
// <div className='bg-slate-200 mt-10 p-6 rounded-lg w-full max-w-md'> <ShowData products={formData} onDelete={onDeleteHandler}></ShowData></div>

//       </form>
//       </div>
//     </div>
//   )
// }
import React, { useState } from 'react';
import ShowData from './ShowData';

export default function Productisted() {
  const [productId, setProductId] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productName, setProductName] = useState('');
  const [formData, setFormData] = useState([]);

  const addSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      id: productId,
      productName: productName,
      productPrice: parseInt(productPrice),
    };
    setFormData((prev) => [...prev, data]);

    setProductId('');
    setProductName('');
    setProductPrice('');
  };

  const onDeleteHandler = (id) => {
    const updatedData = formData.filter((pro) => pro.id !== id);
    setFormData(updatedData);
  };

  return (
    <div className=' p-10 min-h-screen flex flex-col items-center'>
      <form className='bg-red-800 p-6 rounded-lg shadow-lg flex flex-col gap-5 w-full max-w-md' onSubmit={addSubmitHandler}>
        <div className='flex flex-col'>
          <label htmlFor='productid' className='text-white mb-2'>Product ID</label>
          <input 
            type='text' 
            id='productid' 
            value={productId} 
            onChange={(e) => setProductId(e.target.value)} 
            className='p-2 rounded'
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor='sellingprice' className='text-white mb-2'>Selling Price</label>
          <input 
            type='number' 
            id='sellingprice' 
            value={productPrice} 
            onChange={(e) => setProductPrice(e.target.value)} 
            className='p-2 rounded'
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor='productname' className='text-white mb-2'>Product Name</label>
          <input 
            type='text' 
            id='productname' 
            value={productName} 
            onChange={(e) => setProductName(e.target.value)} 
            className='p-2 rounded'
          />
        </div>

        <button type='submit' className='bg-green-500 text-white p-2 rounded hover:bg-green-600'>
          Add Product
        </button>
      </form>

      <div className='bg-slate-200 mt-10 p-6 rounded-lg w-full max-w-md'>
        <ShowData products={formData} onDelete={onDeleteHandler} />
      </div>
    </div>
  );
}
