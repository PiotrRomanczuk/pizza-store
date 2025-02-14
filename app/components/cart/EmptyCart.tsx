'use client'

import { useRouter } from 'next/navigation'

export const EmptyCart = () => {
  const router = useRouter()
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center bg-white p-8 rounded-xl shadow-sm max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet.</p>
        <button
          onClick={() => router.push('/')}
          className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors duration-200"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  )
} 