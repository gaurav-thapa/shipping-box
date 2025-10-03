import { NavLink } from 'react-router'

const Navbar = () => {
    const navClasses = 'cursor-pointer hover:bg-gray-800 p-4 border-2 border-gray-950'
    return (
        <div className='sticky top-0 text-nowrap flex flex-wrap bg-gray-950 px-2 sm:px-4 sm:gap-6 items-center'>
            <div>
                <h1 className='cursor-default text-xl font-bold py-4'>Shipping Box</h1>

            </div>
            <div className='flex sm:gap-6'>
                <NavLink to={'/'} className={({ isActive }) => isActive ? 'border-b-gray-500 ' + navClasses : navClasses}>Add Shipment</NavLink>
                <NavLink to={'/viewShipment'} className={({ isActive }) => isActive ? 'border-b-gray-500 ' + navClasses : navClasses}>View Shipment</NavLink>
            </div>
        </div>
    )
}

export default Navbar