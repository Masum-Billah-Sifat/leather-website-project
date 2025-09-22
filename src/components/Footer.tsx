// export default function Footer() {
//   return (
//     <footer className="bg-gray-100 mt-20">
//       <div className="max-w-7xl mx-auto px-6 py-8 text-center text-gray-600 text-sm">
//         &copy; {new Date().getFullYear()} Hazaribagh Leather — All rights reserved.
//       </div>
//     </footer>
//   )
// }


// src/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-700">
        {/* Branding */}
        <div>
          <h2 className="text-lg font-bold text-black mb-2">Hazaribagh Leather</h2>
          <p className="text-gray-600">
            Connecting authentic leather artisans of Hazaribagh with the rest of Bangladesh.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold text-black mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/products" className="hover:underline">Products</a></li>
            <li><a href="/sellers" className="hover:underline">Sellers</a></li>
            <li><a href="/login" className="hover:underline">Login</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-md font-semibold text-black mb-2">Support</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Contact Support</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-md font-semibold text-black mb-2">Contact</h3>
          <p>Email: support@hazaribaghleather.com</p>
          <p>Phone: +880 123-456-7890</p>
          <p>Location: Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-200 text-center text-gray-600 text-sm py-4">
        &copy; {new Date().getFullYear()} Hazaribagh Leather — All rights reserved.
      </div>
    </footer>
  )
}
