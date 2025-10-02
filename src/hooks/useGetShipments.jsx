import React, { useEffect, useState } from 'react'

const useGetShipments = () => {
    const [shipments, setShipments] = useState([]);
    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('shipments')) || [];
        setShipments(localData);
    }, []);
    return {
        shipments
    }
}

export default useGetShipments