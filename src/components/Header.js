import React from 'react';
import Image from 'next/image';
import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';

import {
    Bars3Icon,
    MagnifyingGlassIcon,
    ShoppingCartIcon
} from "@heroicons/react/24/outline";


function Header() {
    const {data: session, status} = useSession();
    const router = useRouter();
    const items = useSelector(selectItems);

  return (
    <header>
        {/* top nav */}
        <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
            {/* logo */}
            <div onClick={() => router.push('/')} className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                <Image
                    src='https://links.papareact.com/f90'
                    width={150}
                    height={40}
                    objectFit='contain'
                    className='cursor-pointer'
                /> 
            </div>
            {/* search */}
            <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
                <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' type="text" />
                <MagnifyingGlassIcon className="h-12 p-4"/>
            </div>
            {/* right section */}
            <div className='text-white flex items-center text-xs space-x-6 px-3 mx-6 whitespace-nowrap'>
                <div onClick={!session ? signIn : signOut} className='link'>
                    <p>{session ? `Hello, ${session.user.name}` : "Sign in"}</p>
                    <p className='font-extrabold md:text-sm md:font-bold'>Account & Lists</p>
                </div>
                <div className='link'>
                    <p>Returns</p>
                    <p className='font-extrabold md:text-sm md:font-bold'>& Orders</p>
                </div>
                <div onClick={() => router.push('/checkout')} className='relative link flex items-center'>
                    <span className='absolute top-0 right-0 md:right-9 h-4 w-4 bg-yellow-400 text-center text-black font-bold rounded-full'>
                        { items.length }
                    </span>
                    <ShoppingCartIcon className='h-8'/>
                    <p className='hidden md:inline  m-1 mt-2 font-extrabold md:text-sm md:font-bold'>Cart</p>
                </div>
            </div>
        </div>
        {/* bottom nav */}
        <div className='flex items-center bg-amazon_blue-light text-white text-sm space-x-4 p-2 pl-6'>
            <p className='link flex items-center'>
                <Bars3Icon className='h-5 mr-1'/>
                All
            </p>
            <p className='link'>Prime Video</p>
            <p className='link'>Amazon Business</p>
            <p className='link'>Today's Deals</p>

            <p className='link hidden lg:inline-flex'>Prime Music</p>
            <p className='link hidden lg:inline-flex'>Electronics</p>
            <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
        </div>
    </header>
  )
}

export default Header