import React, { useState } from 'react'
import useGetShipments from '../hooks/useGetShipments'

const Table = () => {
  const { shipments } = useGetShipments();
  const inrFormatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  });
  return (
    <div className='md:w-2/3 lg:w-1/2 mx-auto pb-10'>
      <div className='bg-gray-200 mt-10 p-6 text-black rounded-lg'>
        <h1 className='text-lg font-bold mb-3'>Shipments</h1>
        {shipments && shipments.map(shipment =>
          <div className='flex sm:flex-nowrap sm:items-center flex-wrap shadow-lg mb-4 p-4  bg-white rounded-lg' key={shipment.id}>
            <h1 className='basis-1/2 sm:basis-3/12 '><div className='text-xs text-gray-400'>Name: </div>{shipment.name}</h1>
            <div className='basis-1/2 sm:basis-3/12 '><div className='text-xs text-gray-400'>Weight: </div><span className='text-nowrap'>{shipment.weight} <span className='text-gray-400 text-xs'>KG</span></span></div>
            <div className='basis-1/4 sm:basis-2/12 '><div className='text-xs text-gray-400'>Destination: </div>{shipment.country}</div>
            <div className='basis-1/4 sm:basis-1/12 '><div className='text-xs text-gray-400 text-nowrap'>Box color: </div><div style={{ backgroundColor: shipment.color, width: '50px', height: '25px', borderRadius: '6px' }}></div></div>
            <div className='basis-2/4 sm:basis-3/12 text-sm  sm:text-end'><div className='text-xs text-gray-400'>Cost: </div> {inrFormatter.format(shipment.cost)}</div>
          </div>)}
        {shipments.length === 0 && <div className='text-center'>No Shipments Found!</div>}
      </div>
    </div>
  )
}

export default Table