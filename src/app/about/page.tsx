import LayoutWrapper from '../../components/LayoutWrapper'
import Image from 'next/image'

/**
 * About Page — responsive, modern company intro
 */
export default function AboutPage() {
  return (
    <LayoutWrapper>
      <div className="py-12 space-y-12">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-neutral-900">
            About Hazaribagh Leather
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed">
            We connect authentic leather artisans of Hazaribagh with customers
            across Bangladesh. Our mission is to bring world-class craftsmanship
            to everyone, everywhere.
          </p>
        </div>

        {/* Image + Text */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="/images/about.jpg"
            alt="Hazaribagh Leather"
            width={600}
            height={400}
            className="rounded-xl shadow-md w-full h-auto object-cover"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-neutral-800">
              Our Story
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              For decades, Hazaribagh has been the heart of Bangladesh’s leather
              industry. We are proud to showcase its heritage while making it
              accessible to modern shoppers through technology.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Our platform is built to empower small businesses, highlight
              artisans, and bring their products to customers nationwide.
            </p>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
