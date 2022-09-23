import React from 'react'
import Header from '../components/Header'
import Image from 'next/dist/client/image'
import { useSelector } from 'react-redux'
import { selectItems, totalPrice } from '../slices/basketSlice'
import CheckoutProduct from '../components/CheckoutProduct'
import Currency from 'react-currency-formatter';
import { useSession } from "next-auth/react"

function Checkout() {
    const items = useSelector(selectItems);
    const {data: session, status} = useSession();
    const total = useSelector(totalPrice)

  return (
    <div className='bg-gray-100'>
        <Header />
        <main className='lg:flex max-w-screen-2xl mx-auto'>
            {/* left  */}
            <div className='flex-grow m-5 shadow-sm'>
                <Image src="https://links.papareact.com/ikj" width={1020} height={250} objectFit="contain" />
                <div className='flex flex-col space-y-10 p-5 bg-white'>
                    <h1 className='text-3xl border-b pb-4 font-semibold'>
                        Your Cart
                        {items.length === 0 ? ' is Empty.' : ` (${items.length} Products)` }
                    </h1>

                    {items.map(item => (
                        <CheckoutProduct key={item.product.id} item={item} />
                    ))}
                </div>
            </div>

            {/* right  */}
            <div >
                {items.length > 0 && (
                    <div className='bg-white p-5 m-5 h-full flex flex-col'>
                        <h2 className='font-semibold'> 
                            Subtotal ({items.length} items): {" "}
                            <span>
                                <Currency quantity={total} currency='EUR'/>    
                            </span>
                        </h2>
                        <button className={`mt-4 ${!session ? 'grey-button cursor-not-allowed' : 'button'}`} disabled={!session}>
                            {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
                        </button>
                    </div>
                )}
            </div>

        </main>
    </div>
  )
}

export default Checkout