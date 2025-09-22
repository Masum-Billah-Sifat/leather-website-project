import Link from 'next/link'
import LayoutWrapper from '../components/LayoutWrapper'
import Image from 'next/image'

/**
 * Home Page — modern responsive landing page with hero, features, and CTA
 */
export default function Home() {
  return (
    <LayoutWrapper>
      <section className="min-h-[85vh] flex flex-col md:flex-row items-center justify-between gap-10 py-16">
        {/* Hero Left */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-neutral-900">
            Discover Premium Leather Goods from Hazaribagh
          </h1>
          <p className="text-lg text-neutral-600 mb-6">
            Handcrafted by the finest artisans. Explore bags, belts, wallets, and more — all from one trusted platform.
          </p>
          <Link
            href="/products"
            className="inline-block px-6 py-3 bg-brand text-white text-lg rounded-lg hover:bg-brand/90 transition"
          >
            Browse Products
          </Link>
        </div>

        {/* Hero Right */}
        <div className="w-full md:w-[50%]">
          <Image
            src="/images/hero-leather.jpg"
            alt="Leather Showcase"
            width={600}
            height={400}
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-neutral-800">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition">
            <Image src="/images/quality.png" alt="Quality" width={100} height={100} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">World-Class Quality</h3>
            <p className="text-sm text-neutral-600">Every item is crafted with precision and top-grade leather sourced from trusted tanneries.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition">
            <Image src="/images/nationwide.jpeg" alt="Nationwide" width={100} height={100} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Nationwide Reach</h3>
            <p className="text-sm text-neutral-600">Enable local Hazaribagh sellers to deliver their products anywhere in Bangladesh.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition">
            <Image src="/images/secure.png" alt="Secure" width={100} height={100} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Seller & Buyer Friendly</h3>
            <p className="text-sm text-neutral-600">We offer seamless seller dashboards and safe customer experiences for all users.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white rounded-xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Are You a Leather Shop Owner?</h2>
        <p className="text-neutral-600 mb-8 text-lg">
          Join our platform today and showcase your products to customers across Bangladesh.
        </p>
        <Link
          href="/login"
          className="inline-block px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white text-lg rounded-lg shadow-md transition"
        >
          Login to Get Started
        </Link>
      </section>
    </LayoutWrapper>
  )
}

// import Link from 'next/link'
// import LayoutWrapper from '../components/LayoutWrapper'


// export default function Home() {
//   return (
//     <LayoutWrapper>
//       <main className="min-h-screen flex flex-col items-center justify-center">
//         <h1 className="text-4xl font-bold mb-4">Hazaribagh Leather</h1>
//         <p className="mb-6">Connecting premium leather shops to all of Bangladesh</p>
//         <Link
//           href="/login"
//           className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800"
//         >
//           Login as Seller or Customer
//         </Link>
//       </main>
//     </LayoutWrapper>
//   )
// }


// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
