import React, { useContext } from 'react'
import { GlobalContext } from '../CartContext/CartContext'


const Cart = () => {

  const {carrito,removeItem,clear,qtyCompra} = useContext(GlobalContext)

  return (
    <>
      {carrito.length > 0 ? carrito.map((item,index)=>(
        <div key={index} className='d-flex justify-content-center p-2'>
          <img className="card-img-top mb-5 mb-md-0" src={item.imagenUrl} style={{width:'100px',height:'100px'}} />
          <p className='d-flex align-items-center' style={{width:'350px'}}>{item.title}</p>
          <p className='d-flex align-items-center ' style={{width:'50px'}}>{item.cantidad}</p>
          <p className='d-flex align-items-center'style={{width:'75px'}}>${item.price}</p>
          <p className='d-flex align-items-center'style={{width:'75px'}}>${item.price *item.cantidad}</p>
          
          <button className='btn btn-warning m-3' style={{height:'40px'}} onClick={()=>removeItem(item.id)}>Quitar Item</button>
        </div>
        

      )): <h1>Carrito esta vacio</h1>

      }

      {carrito.length > 0 ? ( 
        <div>
            <h1>Total: ${carrito.map((c)=>c.price*c.cantidad).reduce((prev, curr) => prev + curr, 0)}</h1>
        </div>) : 
        <></>

      }

      {carrito.length !== 0?<button className='btn btn-danger m-2' onClick={()=> clear()}>Borrar Todo</button>:<p></p>}
      
    </>
  )
}

export default Cart