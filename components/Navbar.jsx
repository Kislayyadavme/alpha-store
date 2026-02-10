'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [user, setUser] = useState(null)
    const [cartCount, setCartCount] = useState(0)
    const router = useRouter()

    useEffect(() => {
        const storedUser = localStorage.getItem('user')
        const cart = localStorage.getItem('cart')

        if (storedUser) setUser(JSON.parse(storedUser))
        if (cart) setCartCount(JSON.parse(cart).length)
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('authToken')
        setUser(null)
        router.push('/')
    }

    return (
        <nav className="bg-gray-900 text-white sticky top-0 z-40 shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    <Link href="/" className="flex items-center space-x-2 font-bold text-xl">α Alpha Store</Link>
                    <div className="hidden md:flex space-x-8">
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link href="/cart" className="relative"> 🛒 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{cartCount}</span></Link>
                        {user ? (
                            <div className="relative group">
                                <button className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold">
                                        {user.email[0].toUpperCase()}
                                    </div>
                                </button>
                                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                                    <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
                                    <Link href="/orders" className="block px-4 py-2 hover:bg-gray-100">Orders</Link>
                                    <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600 font-bold">Logout</button>
                                </div>
                            </div>
                        ) : (
                            <Link href="/login" className="bg-gray-700 px-4 py-2 rounded">Login</Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}