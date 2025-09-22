import { sellers } from '../../../data/sellers'
import { products } from '../../../data/products'
import Image from 'next/image'
import LayoutWrapper from '../../../components/LayoutWrapper'
import Link from 'next/link'

interface Props {
  params: { id: string }
}

/**
 * Seller Profile Page — responsive seller profile and their product grid
 */
export default function SellerProfilePage({ params }: Props) {
  const seller = sellers.find((s) => s.id === params.id)

  if (!seller) {
    return (
      <LayoutWrapper>
        <div className="p-10 text-center text-lg">Seller not found.</div>
      </LayoutWrapper>
    )
  }

  const sellerProducts = products.filter((p) => p.sellerId === seller.id)

  return (
    <LayoutWrapper>
      <div className="py-10">
        {/* Seller Info */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-10">
          <Image
            src={seller.logo}
            alt={seller.name}
            width={120}
            height={120}
            className="rounded-full border shadow w-[100px] h-[100px] object-cover"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-bold text-neutral-900 mb-1">{seller.name}</h1>
            <p className="text-sm text-neutral-600">{seller.description}</p>
          </div>
        </div>

        {/* Product Grid */}
        <h2 className="text-2xl font-semibold text-neutral-800 mb-6">Products by {seller.name}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sellerProducts.map((product) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className="bg-white border p-4 rounded-xl shadow hover:shadow-md transition block"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={250}
                className="rounded-lg mb-3 object-cover w-full h-[200px]"
              />
              <h3 className="text-lg font-semibold text-neutral-800 mb-1">{product.name}</h3>
              <p className="text-sm text-brand font-medium">৳ {product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </LayoutWrapper>
  )
}

// import { sellers } from '../../../data/sellers'
// import { products } from '../../../data/products'
// import Image from 'next/image'

// interface Props {
//   params: { id: string }
// }

// export default function SellerProfilePage({ params }: Props) {
//   const seller = sellers.find((s) => s.id === params.id)

//   if (!seller) return <div className="p-10 text-center">Seller not found.</div>

//   const sellerProducts = products.filter((p) => p.sellerId === seller.id)

//   return (
//     <div className="p-8 max-w-5xl mx-auto">
//       <div className="mb-8 flex items-center gap-6">
//         <Image
//           src={seller.logo}
//           alt={seller.name}
//           width={120}
//           height={120}
//           className="rounded-full"
//         />
//         <div>
//           <h1 className="text-3xl font-bold">{seller.name}</h1>
//           <p className="text-gray-600">{seller.description}</p>
//         </div>
//       </div>

//       <h2 className="text-2xl font-semibold mb-4">Products from this Seller</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {sellerProducts.map((product) => (
//           <div
//             key={product.id}
//             className="border p-4 rounded-lg bg-white shadow"
//           >
//             <Image
//               src={product.image}
//               alt={product.name}
//               width={400}
//               height={250}
//               className="rounded mb-2"
//             />
//             <h3 className="text-lg font-semibold">{product.name}</h3>
//             <p className="text-gray-600">৳ {product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
