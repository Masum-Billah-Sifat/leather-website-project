import Link from 'next/link'
import Image from 'next/image'
import { products } from '../../data/products'
import LayoutWrapper from '../../components/LayoutWrapper'

/**
 * Product List Page — responsive product grid with modern styling
 */
export default function ProductListPage() {
  return (
    <LayoutWrapper>
      <div className="py-10">
        <h1 className="text-3xl font-bold mb-8 text-center md:text-left text-neutral-900">
          All Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 group"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="rounded-lg mb-3 object-cover w-full h-[220px] group-hover:scale-[1.03] transition-transform duration-300"
              />
              <h2 className="text-lg font-semibold text-neutral-800 mb-1">
                {product.name}
              </h2>
              <p className="text-brand font-bold mb-1">৳ {product.price}</p>
              <p className="text-sm text-neutral-600 line-clamp-2">
                {product.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </LayoutWrapper>
  )
}


// import Link from 'next/link'
// import Image from 'next/image'
// import { products } from '../../data/products'

// export default function ProductListPage() {
//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold mb-6">All Products</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <Link
//             href={`/product/${product.id}`}
//             key={product.id}
//             className="border rounded-lg p-4 bg-white shadow hover:shadow-lg"
//           >
//             <Image
//               src={product.image}
//               alt={product.name}
//               width={400}
//               height={300}
//               className="rounded mb-3"
//             />
//             <h2 className="text-xl font-semibold">{product.name}</h2>
//             <p className="text-gray-600 mb-1">৳ {product.price}</p>
//             <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// }
