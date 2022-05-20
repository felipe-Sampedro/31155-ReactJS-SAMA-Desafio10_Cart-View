import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../CartContext/CartContext'

const ItemCount = ({window,onAdd,quantityToAdd}) => {
    
    const [counter,setCounter] = useState(1)
    
/*     const [quantityToAdd, setQuantityToAdd] = useState(null) */

    const {carrito,AddToCart,isInCart}=useContext(GlobalContext)

    function sumar(){
        counter < window.stock && setCounter(counter+1)
    }

    function restar(){
        counter > 1 && setCounter(counter-1)
    }


  return (
    
    <div>
        <p><strong>stock disponible: </strong>{window.stock}</p>
        <div className='d-flex justify-content-between p-2'>
            {quantityToAdd ===0 ?(
               <> 
                    <button onClick={restar}>-</button>
                        <p>{counter}</p>
                    <button onClick={sumar}>+</button>
                </>
            ):(
                <></>
            )}

        </div>
        <div className="d-flex justify-content-center ">
             
{/*         {!isInCart(window.id) &&   
             quantityToAdd === 0 ?(
                <button onClick={()=>onAdd(counter,window.title)} className="btn btn-outline-dark flex-shrink-0 p-1" type="button">
                    Agregar al carrito
                </button>
                ) : (
                    <></>                    
                ) 
        } */}

            {!isInCart(window.id) ? (
/*                 <button onClick={()=>onAdd(counter,window.title)} className="btn btn-outline-dark flex-shrink-0 p-1" type="button">
                    Agregar al carrito
                 </button> */

                <button onClick={()=>AddToCart(window,counter)} className="btn btn-outline-dark flex-shrink-0 p-1" type="button">
                    Agregar al carrito
                </button>

            ) : (
                <></>                    
            )}

        </div>
    </div>
  )
}
export default ItemCount

