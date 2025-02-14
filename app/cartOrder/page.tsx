'use client'

import { useContext, useState } from 'react'
import { CartContext } from "@/context/CartProvider"
import { FormInput } from '@/app/components/cart/FormInput'
import { OrderSummary } from '@/app/components/cart/OrderSummary'
import { EmptyCart } from '@/app/components/cart/EmptyCart'
import { FormData, formFields } from '@/app/types/cart'

export default function CartOrder() {
  const { cartItems, clearCart } = useContext(CartContext)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    country: ''
  })

  // Calculate totals
  const totalQuantity = cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0)
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 0)), 0)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cartItems,
          shipping: formData,
        }),
      })

      const { url } = await response.json()
      
      if (url) {
        clearCart()
        window.location.href = url
      }
    } catch (error) {
      console.error('Error creating checkout session:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (cartItems.length === 0) {
    return <EmptyCart />
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="order-2 lg:order-1">
            <OrderSummary 
              cartItems={cartItems.map(item => ({...item, id: item.id.toString()}))}
              totalQuantity={totalQuantity}
              totalPrice={totalPrice}
            />
          </div>

          <div className="order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">Shipping Information</h2>
              
              <div className="grid gap-6">
                {formFields.map(({ id, label, type }) => (
                  <div key={id} className="col-span-2">
                    <FormInput
                      id={id}
                      label={label}
                      type={type}
                      value={formData[id]}
                      onChange={handleInputChange}
                    />
                  </div>
                ))}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-8 bg-gray-800 text-white py-4 px-6 rounded-lg hover:bg-gray-700 transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Proceed to Payment</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

