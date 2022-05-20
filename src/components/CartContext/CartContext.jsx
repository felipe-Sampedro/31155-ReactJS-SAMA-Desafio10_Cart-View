import React, { createContext, useState } from 'react'


export const GlobalContext = createContext('')


const CartContext = ({children}) => {
    
    const [carrito, setCarrito] = useState([])
    const [qtyCompra, setqtyCompra] = useState(0)


    const AddToCart = (producto,cantidadcomprada) => {
        
        setqtyCompra({...producto,qtyCompra:cantidadcomprada})
        producto.cantidad=cantidadcomprada

        const repetido = carrito.find((carr)=>carr.id=== Number(producto.id))

        repetido ? carrito.map(p=> p.id===producto.id? setqtyCompra(cantidadcomprada) : 0) :setCarrito([...carrito,producto])

    }

    const AddItem = (item,quantity)=>{
      const agregado = {item,quantity}
    }


    const removeItem = (id)=>{
      const remover = carrito.filter((ref)=>ref.id !== Number(id))

      setCarrito(remover)

    }

    const isInCart = (id) =>{
      return carrito.some(e => e.id===id)
    }


    const clear = () =>{
      setCarrito([])
      setqtyCompra(0)

    }



  return (
    <GlobalContext.Provider value= {{carrito,setCarrito,qtyCompra,setqtyCompra,AddToCart,removeItem,clear,isInCart}} >
        {children}
    </GlobalContext.Provider>
  )
}

export default CartContext