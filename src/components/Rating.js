import React from 'react'
import {StarIcon} from '@heroicons/react/24/solid'

function Rating({ rating }) {
  return (
    <div className='flex'>
        {Array(rating).fill().map((_,i) => (
            <StarIcon className='h-4 text-yellow-500'/>

        ))}
    </div>
  )
}

export default Rating