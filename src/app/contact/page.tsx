'use client'

import LayoutWrapper from '../../components/LayoutWrapper'
import { useState } from 'react'

/**
 * Contact Page — responsive form + company info
 */
export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Message sent! (mock)\n\n${JSON.stringify(form, null, 2)}`)
  }

  return (
    <LayoutWrapper>
      <div className="py-12 grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-6 text-neutral-900">Contact Us</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Your Name</label>
              <input
                type="text"
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows={4}
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-neutral-900">Get in Touch</h2>
          <p className="text-neutral-600">
            Have questions? Reach out to us anytime — we’d love to hear from you.
          </p>
          <div className="space-y-2 text-neutral-700">
            <p><strong>Email:</strong> support@hazaribaghleather.com</p>
            <p><strong>Phone:</strong> +880 123-456-7890</p>
            <p><strong>Address:</strong> Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
