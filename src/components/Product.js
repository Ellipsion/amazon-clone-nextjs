import React, { useState } from 'react';
import Image from 'next/image';
import Currency from 'react-currency-formatter';
import Rating from './Rating';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';
import Prime from './Prime';


const MIN_RATING = 1
const MAX_RATING = 5

const Product = ({product}) => {
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );

    const [hasPrime] = useState(
        Math.random() < 0.5
    );

    const dispatch = useDispatch();

    const addItemToBasket = () => {
        // product.stars = rating;
        // product.hasPrime = hasPrime;
        // sending the product as an action to redux STORE...the basket slice
        dispatch(addToBasket({product, rating, hasPrime}));
    }

  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
        <p className='absolute top-2 right-2 text-xs italic text-gray-400 md:text-sm'>{product.category}</p>

        <Image className='mb-3' src={product.image} height={200} width={200} objectFit="contain"/>
        <h3 className='my-3 font-semibold'>{product.title}</h3>

        <Rating rating={rating}/>

        <p className='text-xs my-2 line-clamp-2'>{product.description}</p>
        <div className="mb-5">
            <Currency  quantity={product.price} currency='EUR'/>
        </div>
        
        <Prime hasPrime={hasPrime} />

        <button onClick={addItemToBasket} className='mt-auto button'>Add to Basket</button>
    </div>
  )
}

export default Product