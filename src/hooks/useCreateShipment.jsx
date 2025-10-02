import React from 'react'

const useCreateShipment = () => {

    const create = (formData) => {
        const rates = {
            Sweden: 7.35,
            China: 11.53,
            Brazil: 15.63,
            Australia: 50.09,
        }
        const shipment = { ...formData, id: Math.random(), cost: (rates[formData.country] * formData.weight).toFixed(2) };
        const existingShipments = JSON.parse(localStorage.getItem('shipments')) || [];
        const updatedShipments = [shipment, ...existingShipments];
        localStorage.setItem('shipments', JSON.stringify(updatedShipments));
    }
    return {
        create
    }
}

export default useCreateShipment