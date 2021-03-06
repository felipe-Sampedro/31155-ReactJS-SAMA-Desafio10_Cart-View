import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { catalogo } from '../../Config';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {

const {id} = useParams()
const [item, setItem] = useState([])
const filtro = catalogo.find((prod)=>prod.id=== Number(id))

useEffect(() => {
  
  const detalle = new Promise((resolve,reject) =>{
    setTimeout(() => {
      resolve(filtro ? filtro : catalogo)
    }, 2000);

  })

  detalle.then((res) => setItem(res))
/*   .then(() => console(window)) */
  .catch((err) => console(err))


  return () => {
  
  }
}, [])


  return (
    <div>

      {window ? <ItemDetail item={item}/> : <Loader /> }

    </div>
  )
}

export default ItemDetailContainer