import React from 'react'
import Header from '../components/Header'
import Image from 'next/dist/client/image'

function Checkout() {
  return (
    <div className='bg-gray-100'>
        <Header />
        <main className='lg:flex max-w-screen-2xl mx-auto'>
            {/* left  */}
            <div className='flex-grow m-5 shadow-sm'>
                <Image src="https://links.papareact.com/ikj" width={1020} height={250} objectFit="contain" />
                <div className='flex flex-col space-y-10 p-5 bg-white'>
                    <h1 className='border-b pb-4'>Your Cart</h1>
                    <h2 className='border-b pb-4'>Your Cart</h2>
                    <p className='border-b pb-4'>Your Cart</p>

                </div>
            </div>

            {/* right  */}

        </main>
    </div>
  )
}

export default Checkout