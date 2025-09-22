'use client'

import { useAuth } from '../../../../context/AuthContext'
import { useState } from 'react'
import LayoutWrapper from '../../../../components/LayoutWrapper'

/**
 * Add Product Page — responsive form to add a new product
 */
export default function AddProductPage() {
  const { role } = useAuth()
  const [form, setForm] = useState({
    name: '',
    price: '',
    image: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`New product added:\n\n${JSON.stringify(form, null, 2)}`)
  }

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
      <div className="max-w-xl mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Add New Product</h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-6 rounded-xl shadow-md"
        >
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Product Name
            </label>
            <input
              type="text"
              className="w-full border border-neutral-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Price (৳)
            </label>
            <input
              type="number"
              className="w-full border border-neutral-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Image URL
            </label>
            <input
              type="text"
              className="w-full border border-neutral-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition shadow-md"
          >
            Add Product
          </button>
        </form>
      </div>
    </LayoutWrapper>
  )
}

// 'use client'

// import { useAuth } from '../../../../context/AuthContext'
// import { useState } from 'react'

// export default function AddProductPage() {
//   const { role } = useAuth()
//   const [form, setForm] = useState({
//     name: '',
//     price: '',
//     image: '',
//   })

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     alert(`New product added:\n\n${JSON.stringify(form, null, 2)}`)
//   }

//   if (role !== 'seller') {
//     return (
//       <div className="p-10 text-center">
//         <h2 className="text-2xl font-semibold">Access Denied</h2>
//         <p className="text-gray-600">This page is only for sellers.</p>
//       </div>
//     )
//   }

//   return (
//     <div className="max-w-xl mx-auto p-8">
//       <h1 className="text-2xl font-bold mb-6">Add New Product</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block font-medium">Product Name</label>
//           <input
//             type="text"
//             className="w-full border px-3 py-2 rounded"
//             value={form.name}
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//           />
//         </div>
//         <div>
//           <label className="block font-medium">Price (৳)</label>
//           <input
//             type="number"
//             className="w-full border px-3 py-2 rounded"
//             value={form.price}
//             onChange={(e) => setForm({ ...form, price: e.target.value })}
//           />
//         </div>
//         <div>
//           <label className="block font-medium">Image URL</label>
//           <input
//             type="text"
//             className="w-full border px-3 py-2 rounded"
//             value={form.image}
//             onChange={(e) => setForm({ ...form, image: e.target.value })}
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Add Product
//         </button>
//       </form>
//     </div>
//   )
// }
