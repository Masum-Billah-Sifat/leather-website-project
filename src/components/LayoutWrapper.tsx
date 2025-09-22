'use client'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 w-full min-h-screen">
      {children}
    </div>
  )
}
