'use client'
import React from 'react'
import { useState } from 'react';
import Button from './Button';
import Link from 'next/link';


const Cart = () => {
    const [activeTab,setActiveTab] = useState('cart')
    const handleRequest = () => {
        if(activeTab === 'cart') {
            setActiveTab('shipping')
        }
        else if(activeTab === 'shipping') {
            setActiveTab('payment')
        }
    }

  return (
    <div className="flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center mt-6 p-6 bg-[#4C4B48] shadow-lg drop-shadow-lg shadow-[#201F1D]">
            <div className='px-6'>
                <ul className="flex mb-6">
                    <li>
                        <h4 className={activeTab === 'cart' ? "cursor-pointer p-4 border-b-2" : "cursor-pointer p-4 text-[#201F1D] hover:text-blue-600"}>
                                Shopping Cart
                        </h4>
                    </li>
                    <li>
                        <h4 className={activeTab === 'shipping' ? "cursor-pointer p-4 border-b-2" : "cursor-pointer p-4 text-[#201F1D] hover:text-blue-600"}>
                                Shipping
                        </h4>
                    </li>
                    <li>
                        <h4 className={activeTab === 'payment' ? "cursor-pointer p-4 border-b-2" : "cursor-pointer p-4 text-[#201F1D] hover:text-blue-600"}>
                                Payment
                        </h4>
                    </li>
                </ul>
            </div>
            <div className='px-6'>
                {
                    activeTab === 'cart'
                        ? (
                            <form className='w-full'>
                                <div className="relative w-full mb-6 group">
                                    <input type="email" name="email" id="email" className="block py-4 w-full bg-transparent border-0 border-b-2 border-white focus:outline-none focus:border-white peer" placeholder=" " required />
                                    <label htmlFor="email" className="peer-focus:font-medium absolute text-white duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">email address</label>
                                </div>
                                <div className="relative w-full group">
                                    <input type="password" name="password" id="password" className="block py-4 w-full bg-transparent border-0 border-b-2 border-white focus:outline-none focus:border-white peer" placeholder=" " required />
                                    <label htmlFor="password" className="peer-focus:font-medium absolute text-white duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">password</label>
                                </div>
                                <div className="relative w-full mb-6 group">
                                    <Link href='' className="block py-4 w-full underline text-right text-[#201F1D] hover:text-blue-600"><p>forgot your password?</p></Link>
                                </div>
                                <Button position='w-full py-2' onClick={handleRequest}>sign in</Button>
                            </form>
                        ) :
                    activeTab === 'shipping'
                        ? (
                            <form className='w-full'>
                                <div className='flex gap-4'>
                                    <div className="relative w-full mb-4 group">
                                        <input type="text" name="firstname" id="firstname" className="block py-4 w-full bg-transparent border-0 border-b-2 border-white focus:outline-none focus:border-white peer" placeholder=" " required />
                                        <label htmlFor="firstname" className="peer-focus:font-medium absolute text-white duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">first name</label>
                                    </div>
                                    <div className="relative w-full mb-4 group">
                                        <input type="text" name="lastname" id="lastname" className="block py-4 w-full bg-transparent border-0 border-b-2 border-white focus:outline-none focus:border-white peer" placeholder=" " required />
                                        <label htmlFor="lastname" className="peer-focus:font-medium absolute text-white duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">last name</label>
                                    </div>
                                </div>
                                <div className="relative w-full mb-4 group">
                                    <input type="email" name="email" id="email" className="block py-4 w-full bg-transparent border-0 border-b-2 border-white focus:outline-none focus:border-white peer" placeholder=" " required />
                                    <label htmlFor="email" className="peer-focus:font-medium absolute text-white duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">email address</label>
                                </div>
                                <div className="relative w-full mb-4 group">
                                    <input type="password" name="password" id="password" className="block py-4 w-full bg-transparent border-0 border-b-2 border-white focus:outline-none focus:border-white peer" placeholder=" " required />
                                    <label htmlFor="password" className="peer-focus:font-medium absolute text-white duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">password</label>
                                </div>
                                <div className="relative w-full mb-4 group">
                                    <input type="password" name="cpassword" id="cpassword" className="block py-4 w-full bg-transparent border-0 border-b-2 border-white focus:outline-none focus:border-white peer" placeholder=" " required />
                                    <label htmlFor="cpassword" className="peer-focus:font-medium absolute text-white duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">confirm password</label>
                                </div>
                                <Button position='w-full py-2 mt-4' onClick={handleRequest}>sign up</Button>
                            </form>
                        )
                        : (
                            <form className='w-full'>
                                <div className="relative w-full mb-6 group">
                                    <input type="email" name="email" id="email" className="block py-4 w-full bg-transparent border-0 border-b-2 border-white focus:outline-none focus:border-white peer" placeholder=" " required />
                                    <label htmlFor="email" className="peer-focus:font-medium absolute text-white duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">email address</label>
                                </div>
                                <div className="relative w-full group">
                                    <input type="password" name="password" id="password" className="block py-4 w-full bg-transparent border-0 border-b-2 border-white focus:outline-none focus:border-white peer" placeholder=" " required />
                                    <label htmlFor="password" className="peer-focus:font-medium absolute text-white duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">password</label>
                                </div>
                                <div className="relative w-full mb-6 group">
                                    <Link href='' className="block py-4 w-full underline text-right text-[#201F1D] hover:text-blue-600"><p>forgot your password?</p></Link>
                                </div>
                                <Button position='w-full py-2' onClick={handleRequest}>sign in</Button>
                            </form>
                        )
                }
            </div>
        </div>
    </div>
  )
}

export default Cart