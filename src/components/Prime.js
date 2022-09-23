import React from 'react'

function Prime({ hasPrime }) {
  return (
    <div>
        {hasPrime && (
            <div className='flex items-center space-x-2 -mt-5'>
                <img className='w-12' src="https://links.papareact.com/fdw" alt="" />
                <p className='text-xs text-gray-500'>Free Next-Day Delivery</p>
            </div>
        )}
    </div>
  )
}

export default Prime