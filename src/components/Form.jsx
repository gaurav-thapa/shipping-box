import React, { useRef, useState } from 'react'
import useCreateShipment from '../hooks/useCreateShipment';
import Modal from './Modal';

const Form = () => {
    const { create } = useCreateShipment();
    const [colorValue, setColorValue] = useState('#8C00FF');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const colorPicker = useRef();
    const form = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        create(data);
        setIsModalOpen(true);
    }
    const onColorChangeHandler = () => {
        setColorValue(colorPicker.current.value);
    }
    const getRgbFromHex = (hex) => {
        const r = parseInt(hex.substring(1, 3), 16);
        const g = parseInt(hex.substring(3, 5), 16);
        const b = parseInt(hex.substring(5, 7), 16);
        return `(${r},${g},${b})`;
    }
    const onModalClose = () => {
        setIsModalOpen(false);
        form.current.reset();
        setColorValue('#8C00FF')
    }
    return (
        <>
            <Modal onClose={onModalClose} open={isModalOpen} />
            <div className='md:w-2/3 lg:w-1/2 mx-auto my-10'>
                <form ref={form} onSubmit={handleSubmit} className='flex flex-col p-6 bg-gray-100 text-black rounded-lg'>
                    <h1 className='text-xl font-bold text-center mb-3'>Add a Shipment</h1>
                    <label className='text-sm mb-2 text-gray-600' htmlFor='name'>Receiver's Name</label>
                    <input className='p-2 mb-2 bg-gray-300 rounded-2xl px-3' id="name" type='text' placeholder='Receiver Name' required name='name' />
                    <div className='flex flex-col md:flex-row md:gap-4 items-center'>
                        <div className='w-full md:basis-1/2 flex flex-col'>
                            <label className='text-sm mb-2 text-gray-600' htmlFor='weight'>Weight (KG)</label>
                            <input className='p-2 mb-2 bg-gray-300 rounded-2xl px-3' id="weight" type='number' min="0.01" required step="0.01" placeholder='Weight' name='weight' />
                        </div>
                        <div className='w-full md:basis-1/2 flex flex-col'>
                            <label className='text-sm mb-2 text-gray-600' htmlFor='country'>Destination Country</label>

                            <select className='p-2 mb-2 bg-gray-300 rounded-2xl px-3' id="country" name='country'>
                                <option value={"Sweden"}>Sweden (7.35 INR)</option>
                                <option value={"China"}>China (11.53 INR)</option>
                                <option value={"Brazil"}>Brazil (15.63 INR)</option>
                                <option value={"Australia"}>Australia (50.09 INR)</option>
                            </select>
                        </div>
                    </div>
                    <div>

                        <label className='text-sm mb-2 text-gray-600' htmlFor='color'>Box Color</label><br />
                        <span className='flex gap-2 flex-wrap'><input onChange={onColorChangeHandler} ref={colorPicker} value={colorValue} className='mb-2 bg-gray-300  ' id="color" type='color' placeholder='Box Color' name='color' />
                            RGB - {getRgbFromHex(colorValue)}</span>
                    </div>

                    <div className='text-center'>

                        <button className='hover:bg-gray-900 cursor-pointer px-6 py-2 bg-gray-700 text-white rounded-lg'>Save</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Form