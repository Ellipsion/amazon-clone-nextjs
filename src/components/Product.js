import React, { useState } from 'react'
import Image from 'next/image'
import {StarIcon} from '@heroicons/react/24/solid'
import Currency from 'react-currency-formatter';
 

const MIN_RATING = 1
const MAX_RATING = 5

const Product = ({product}) => {
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );

    const [hasPrime] = useState(
        Math.random() < 0.5
    )

  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
        <p className='absolute top-2 right-2 text-xs italic text-gray-400 md:text-sm'>{product.category}</p>

        <Image className='mb-3' src={product.image} height={200} width={200} objectFit="contain"/>
        <h3 className='my-3 font-semibold'>{product.title}</h3>

        <div className='flex'>
            {Array(rating).fill().map((_,i) => (
                <StarIcon className='h-4 text-yellow-500'/>

            ))}
        </div>

        <p className='text-xs my-2 line-clamp-2'>{product.description}</p>
        <div className="mb-5">
            <Currency  quantity={product.price} currency='EUR'/>
        </div>
        {hasPrime && (
            <div className='flex items-center space-x-2 -mt-5'>
                <img className='w-12' src="https://links.papareact.com/fdw" alt="" />
                <p className='text-xs text-gray-500'>Free Next-Day Delivery</p>
            </div>
        )}

        <button className='mt-auto btn'>Add to Basket</button>
    </div>
  )
}

export default Product