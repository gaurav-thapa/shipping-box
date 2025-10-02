import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom';

const Modal = ({ open, onClose }) => {
    const dialog = useRef();
    useEffect(() => {
        if (open) {
            dialog.current.showModal();
        }
        else {
            dialog.current.close();
        }
    }, [open])

    const closeModalHandler = () => {
        onClose();
    }
    return createPortal(
        <dialog className='backdrop:bg-black/70 mx-auto my-auto p-10 rounded-lg ' onClose={closeModalHandler} ref={dialog}>
            <div className='text-center'>
                <h1 className='mb-3 text-lg'>Shipment Created Successfully</h1>
                <button className='hover:bg-gray-900 cursor-pointer px-6 py-2 bg-gray-700 text-white rounded-lg' onClick={closeModalHandler}>Close</button>
            </div>
        </dialog>,
        document.getElementById('root')
    )
}

export default Modal