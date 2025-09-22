import { products } from '../../../data/products'
import { sellers } from '../../../data/sellers'
import Image from 'next/image'
import Link from 'next/link'
import LayoutWrapper from '../../../components/LayoutWrapper'

interface Props {
  params: { id: string }
}

/**
 * Product Detail Page — responsive product showcase with seller info
 */
export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    return (
      <LayoutWrapper>
        <div className="p-10 text-center text-lg">Product not found.</div>
      </LayoutWrapper>
    )
  }

  const seller = sellers.find((s) => s.id === product.sellerId)

  return (
    <LayoutWrapper>
      <div className="grid md:grid-cols-2 gap-10 py-12">
        {/* Product Image */}
        <div className="w-full h-full">
          <Image
            src={product.image}
            alt={product.name}
            width={700}
            height={500}
            className="rounded-xl shadow-md w-full object-cover h-auto"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-3 text-neutral-900">{product.name}</h1>
          <p className="text-2xl text-green-600 font-semibold mb-4">৳ {product.price}</p>
          <p className="text-neutral-700 text-base mb-6 leading-relaxed">
            {product.description}
          </p>

          {seller && (
            <div className="bg-white p-5 rounded-xl shadow-md border border-neutral-100">
              <h2 className="text-lg font-semibold text-neutral-800 mb-1">Sold by:</h2>
              <Link
                href={`/seller/${seller.id}`}
                className="text-blue-700 hover:underline"
              >
                {seller.name}
              </Link>
              <p className="text-sm text-neutral-600 mt-1">{seller.description}</p>
            </div>
          )}
        </div>
      </div>
    </LayoutWrapper>
  )
}

// import { products } from '../../../data/products'
// import { sellers } from '../../../data/sellers'
// import Image from 'next/image'
// import Link from 'next/link'

// interface Props {
//   params: { id: string }
// }

// export default function ProductDetailPage({ params }: Props) {
//   const product = products.find((p) => p.id === params.id)

//   if (!product) {
//     return <div className="p-10 text-center">Product not found.</div>
//   }

//   const seller = sellers.find((s) => s.id === product.sellerId)

//   return (
//     <div className="p-8 max-w-4xl mx-auto">
//       <div className="grid md:grid-cols-2 gap-8">
//         <Image
//           src={product.image}
//           alt={product.name}
//           width={600}
//           height={400}
//           className="rounded"
//         />

//         <div>
//           <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
//           <p className="text-2xl text-green-700 mb-4">৳ {product.price}</p>
//           <p className="text-gray-700 mb-6">{product.description}</p>

//           {seller && (
//             <div className="bg-gray-50 p-4 rounded">
//               <h2 className="text-xl font-semibold mb-1">Sold by:</h2>
//               <Link
//                 href={`/seller/${seller.id}`}
//                 className="text-blue-600 hover:underline"
//               >
//                 {seller.name}
//               </Link>
//               <p className="text-sm text-gray-600">{seller.description}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }
