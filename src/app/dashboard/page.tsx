'use client'

import Link from 'next/link'
import { useAuth } from '../../context/AuthContext'
import LayoutWrapper from '../../components/LayoutWrapper'

/**
 * Seller Dashboard — responsive overview with stats, chart, and CTA
 */
export default function DashboardPage() {
  const { role } = useAuth()

  if (role !== 'seller') {
    return (
      <LayoutWrapper>
        <div className="p-10 text-center">
          <h2 className="text-2xl font-semibold">Access Denied</h2>
          <p className="text-gray-600">This page is only for sellers.</p>
        </div>
      </LayoutWrapper>
    )
  }

  return (
    <LayoutWrapper>
      <div className="py-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
          Welcome, Seller 👋
        </h1>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2 text-neutral-800">Total Products</h2>
            <p className="text-4xl font-bold text-brand">12</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2 text-neutral-800">Total Sales</h2>
            <p className="text-4xl font-bold text-green-600">৳ 45,000</p>
          </div>
        </div>

        {/* Sales Chart Mock */}
        <div className="bg-white p-6 rounded-xl shadow mb-10">
          <h2 className="text-xl font-semibold mb-4 text-neutral-800">Sales Overview (Mock)</h2>
          <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-500 rounded">
            [Chart Placeholder]
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/dashboard/products"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 text-lg rounded-lg shadow-md transition"
          >
            Manage Your Products
          </Link>
        </div>
      </div>
    </LayoutWrapper>
  )
}

// 'use client'

// import Link from 'next/link'
// import { useAuth } from '../../context/AuthContext'

// export default function DashboardPage() {
//   const { role } = useAuth()

//   if (role !== 'seller') {
//     return (
//       <div className="p-10 text-center">
//         <h2 className="text-2xl font-semibold">Access Denied</h2>
//         <p className="text-gray-600">This page is only for sellers.</p>
//       </div>
//     )
//   }

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold mb-4">Welcome Seller 👋</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h2 className="text-xl font-semibold mb-2">Total Products</h2>
//           <p className="text-3xl">12</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h2 className="text-xl font-semibold mb-2">Total Sales</h2>
//           <p className="text-3xl">৳ 45,000</p>
//         </div>
//       </div>

//       <div className="bg-white p-6 rounded-lg shadow mb-6">
//         <h2 className="text-xl font-semibold mb-4">Sales Overview (Mock)</h2>
//         <div className="h-40 bg-gray-100 flex items-center justify-center text-gray-500">
//           [Mock Sales Chart Here]
//         </div>
//       </div>

//       <Link
//         href="/dashboard/products"
//         className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
//       >
//         Manage Products
//       </Link>
//     </div>
//   )
// }
