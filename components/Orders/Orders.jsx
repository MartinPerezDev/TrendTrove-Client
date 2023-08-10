import React from 'react'
import { IoReceiptOutline } from 'react-icons/io5'
import OrderCard from './OrderCard'

const Orders = ({orders}) => {
  return (
    <div className="p-2">
      <div className="flex items-center text-xl">
        <IoReceiptOutline className="mr-2" />
        <p>Listado de ordenes</p>
      </div>
      {
        orders.map((order, index)=>(
          <OrderCard key={index} />
        ))
      }
    </div>
  )
}

export default Orders