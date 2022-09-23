import React from 'react'
import Image from 'next/dist/client/image'
import Rating from './Rating'
import Currency from 'react-currency-formatter';
import Prime from './Prime';
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '../slices/basketSlice';

function CheckoutProduct({item}) {
    const dispatch = useDispatch();
    const removeItemFromBasket = () => {
        dispatch(removeFromBasket(item.product.id))
    }

  return (
    <div className='grid grid-cols-5 border-b pb-5'>
        <Image src={item.product.image} width={80} height={80} objectFit="contain" />
        
        <div className='col-span-3 mx-5 flex flex-col space-y-2'>
            <h1 className='font-semibold '>{item.product.title}</h1>
            <Rating rating={item.rating} />
            <div className='font-semibold mt-5'>
                <Currency quantity={item.product.price} currency="EUR" />
            </div>
            <br />
            <Prime hasPrime={item.hasPrime} />
        </div>

        <div className='flex flex-col justify-center'>
            <button onClick={removeItemFromBasket} className='button'>Remove</button>
        </div>
        
    </div>
  )
}

export default CheckoutProduct