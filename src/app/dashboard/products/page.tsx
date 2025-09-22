'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useAuth } from '../../../context/AuthContext'
import { myProducts } from '../../../data/myProducts'
import LayoutWrapper from '../../../components/LayoutWrapper'
import { useState } from 'react'

/**
 * Product Manager Page — responsive grid of seller products
 */
export default function ProductManagerPage() {
  const { role } = useAuth()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <h1 className="text-3xl font-bold text-neutral-800">Your Products</h1>
          <Link
            href="/dashboard/products/new"
            className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700 transition shadow"
          >
            + Add Product
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {myProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 cursor-pointer"
              onClick={() => setSelectedImage(product.image)}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="rounded-lg mb-3 object-cover w-full h-[220px] hover:scale-105 transition-transform duration-300"
              />
              <h2 className="text-lg font-semibold text-neutral-800 mb-1">{product.name}</h2>
              <p className="text-sm text-neutral-600">৳ {product.price}</p>
            </div>
          ))}
        </div>

        {/* Image Pop-up Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <Image
              src={selectedImage}
              alt="Enlarged product"
              width={800}
              height={600}
              className="rounded-xl shadow-xl max-w-[90vw] max-h-[80vh] object-contain"
            />
          </div>
        )}
      </div>
    </LayoutWrapper>
  )
}
// 'use client'

// import Link from 'next/link'
// import Image from 'next/image'
// import { useAuth } from '../../../context/AuthContext'
// import { myProducts } from '../../../data/myProducts'

// export default function ProductManagerPage() {
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
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">Your Products</h1>
//         <Link
//           href="/dashboard/products/new"
//           className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//         >
//           + Add Product
//         </Link>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {myProducts.map((product) => (
//           <div
//             key={product.id}
//             className="border rounded-lg p-4 bg-white shadow-sm"
//           >
//             <Image
//               src={product.image}
//               alt={product.name}
//               width={400}
//               height={300}
//               className="rounded mb-4"
//             />
//             <h2 className="text-lg font-semibold">{product.name}</h2>
//             <p className="text-gray-600">৳ {product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
