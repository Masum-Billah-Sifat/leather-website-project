'use client'

import Link from 'next/link'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const { role } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link href="/" className="text-2xl md:text-3xl font-extrabold text-brand tracking-tight">
          HAZARIBAGH LEATHER
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center text-sm font-medium">
          <Link href="/products" className="text-neutral-700 hover:text-black">
            Products
          </Link>
          <Link href="/sellers" className="text-neutral-700 hover:text-black">
            Sellers
          </Link>
          <Link href="/about" className="text-neutral-700 hover:text-black">
            About
          </Link>
          <Link href="/contact" className="text-neutral-700 hover:text-black">
            Contact
          </Link>
          {role === 'seller' && (
            <Link href="/dashboard" className="text-neutral-700 hover:text-black">
              Dashboard
            </Link>
          )}
          <Link
            href="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow text-sm"
          >
            Login
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Side Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-inner px-6 py-4 space-y-4 text-sm font-medium">
          <Link href="/products" className="block text-neutral-700 hover:text-black" onClick={() => setIsMenuOpen(false)}>
            Products
          </Link>
          <Link href="/sellers" className="block text-neutral-700 hover:text-black" onClick={() => setIsMenuOpen(false)}>
            Sellers
          </Link>
          <Link href="/about" className="block text-neutral-700 hover:text-black" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link href="/contact" className="block text-neutral-700 hover:text-black" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
          {role === 'seller' && (
            <Link href="/dashboard" className="block text-neutral-700 hover:text-black" onClick={() => setIsMenuOpen(false)}>
              Dashboard
            </Link>
          )}
          <Link
            href="/login"
            className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow w-fit"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  )
}

// 'use client'

// import Link from 'next/link'
// import { useAuth } from '../context/AuthContext'

// export default function Navbar() {
//   const { role } = useAuth()

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         <Link href="/" className="text-2xl font-bold text-black">
//           Hazaribagh Leather
//         </Link>

//         <div className="space-x-4">
//           <Link href="/products" className="text-gray-700 hover:text-black">
//             Products
//           </Link>
//           <Link href="/sellers" className="text-gray-700 hover:text-black">
//             Sellers
//           </Link>
//           {role === 'seller' && (
//             <Link href="/dashboard" className="text-gray-700 hover:text-black">
//               Dashboard
//             </Link>
//           )}
//           <Link href="/login" className="text-blue-600 hover:text-blue-800 font-semibold">
//             Login
//           </Link>
//         </div>
//       </div>
//     </nav>
//   )
// }
