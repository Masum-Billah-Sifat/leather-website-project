'use client'

import { useRouter } from 'next/navigation'
import { useAuth } from '../../context/AuthContext'
import Image from 'next/image'
import LayoutWrapper from '../../components/LayoutWrapper'

/**
 * Login Page — Modern, responsive, mock-enhanced login selector
 */
export default function LoginPage() {
  const { setRole } = useAuth()
  const router = useRouter()

  const handleLogin = (role: 'seller' | 'customer') => {
    setRole(role)
    router.push(role === 'seller' ? '/dashboard' : '/')
  }

  return (
    <LayoutWrapper>
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 py-20">
        {/* Left Side with Image */}
        <div className="hidden md:block w-full max-w-md">
          <Image
            src="/images/login-leather.jpeg"
            alt="Login Visual"
            width={600}
            height={500}
            className="rounded-xl shadow-md w-full h-auto"
          />
        </div>

        {/* Right Side with Buttons */}
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">
          <h1 className="text-3xl font-bold text-center mb-6 text-neutral-800">
            Choose Login Type
          </h1>
          <p className="text-center text-neutral-600 mb-6">
            Are you a seller or just here to explore? Pick your role to continue.
          </p>

          <div className="flex flex-col gap-4">
            <button
              onClick={() => handleLogin('seller')}
              className="bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold shadow"
            >
              Login as Seller
            </button>

            <button
              onClick={() => handleLogin('customer')}
              className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold shadow"
            >
              Login as Customer
            </button>
          </div>

          <div className="mt-8 text-sm text-center text-neutral-500">
            <p>Don’t worry — no account needed for the demo.</p>
            <p className="mt-2">This is a mock login page to simulate roles.</p>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
// 'use client'

// import { useRouter } from 'next/navigation'
// import { useAuth } from '../../context/AuthContext'

// export default function LoginPage() {
//   const { setRole } = useAuth()
//   const router = useRouter()

//   const handleLogin = (role: 'seller' | 'customer') => {
//     setRole(role)
//     router.push(role === 'seller' ? '/dashboard' : '/')
//   }

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
//       <h1 className="text-3xl font-bold mb-6">Login as</h1>
//       <div className="space-x-4">
//         <button
//           onClick={() => handleLogin('seller')}
//           className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
//         >
//           Seller
//         </button>
//         <button
//           onClick={() => handleLogin('customer')}
//           className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
//         >
//           Customer
//         </button>
//       </div>
//     </div>
//   )
// }
