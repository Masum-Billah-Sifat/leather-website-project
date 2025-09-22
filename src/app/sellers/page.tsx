import { sellers } from '../../data/sellers'
import Image from 'next/image'
import Link from 'next/link'
import LayoutWrapper from '../../components/LayoutWrapper'

/**
 * Sellers Page — responsive grid of all seller profiles
 */
export default function SellersPage() {
  return (
    <LayoutWrapper>
      <div className="py-10">
        <h1 className="text-3xl font-bold mb-8 text-center md:text-left text-neutral-900">
          Meet Our Sellers
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {sellers.map((seller) => (
            <Link
              href={`/seller/${seller.id}`}
              key={seller.id}
              className="bg-white border border-neutral-200 p-5 rounded-xl shadow hover:shadow-md transition block"
            >
              <Image
                src={seller.logo}
                alt={seller.name}
                width={400}
                height={250}
                className="rounded-lg mb-4 object-cover w-full h-[200px]"
              />
              <h2 className="text-lg font-semibold text-neutral-800 mb-1">
                {seller.name}
              </h2>
              <p className="text-sm text-neutral-600 line-clamp-2">
                {seller.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </LayoutWrapper>
  )
}

// import { sellers } from '../../data/sellers'
// import Image from 'next/image'
// import Link from 'next/link'

// export default function SellersPage() {
//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold mb-6">All Sellers</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {sellers.map((seller) => (
//           <Link
//             href={`/seller/${seller.id}`}
//             key={seller.id}
//             className="border p-4 rounded-lg bg-white shadow hover:shadow-lg"
//           >
//             <Image
//               src={seller.logo}
//               alt={seller.name}
//               width={400}
//               height={250}
//               className="rounded mb-3 object-cover"
//             />
//             <h2 className="text-xl font-semibold">{seller.name}</h2>
//             <p className="text-sm text-gray-600">{seller.description}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// }
