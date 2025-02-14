'use client'

import { useContext, useState } from 'react'
import { CartContext } from "@/context/CartProvider"
import { useRouter } from 'next/navigation'
import { CartItem } from '../types/cart'

// Types
type FormData = {
  name: string
  email: string
  address: string
  city: string
  zipCode: string
  country: string
}

// Form field configuration
const formFields = [
  { id: 'name', label: 'Full Name', type: 'text' },
  { id: 'email', label: 'Email', type: 'email' },
  { id: 'address', label: 'Address', type: 'text' },
  { id: 'city', label: 'City', type: 'text', halfWidth: true },
  { id: 'zipCode', label: 'ZIP Code', type: 'text', halfWidth: true },
  { id: 'country', label: 'Country', type: 'text' },
] as const

// Reusable form input component
const FormInput = ({ 
  id, 
  label, 
  type, 
  value, 
  onChange 
}: {
  id: keyof FormData
  label: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      required
      value={value}
      onChange={onChange}
      className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
    />
  </div>
)

// Order summary component
const OrderSummary = ({ cartItems, totalQuantity, totalPrice }: { cartItems: CartItem[], totalQuantity: number, totalPrice: number }) => (
  <div className="bg-gray-50 p-6 rounded-lg">
    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
    <ul className="space-y-4">
      {cartItems.map((item) => (
        <li key={item.id} className="flex justify-between">
          <span>{item.name} x {item.quantity}</span>
          <span>${(item.price * (item.quantity || 0)).toFixed(2)}</span>
        </li>
      ))}
    </ul>
    <div className="border-t mt-4 pt-4">
      <div className="flex justify-between font-semibold">
        <span>Total Items:</span>
        <span>{totalQuantity}</span>
      </div>
      <div className="flex justify-between font-semibold text-lg mt-2">
        <span>Total Price:</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  </div>
)

export default function CartOrder() {
  const { cartItems, clearCart } = useContext(CartContext)
  const router = useRouter()
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
    // Here you would typically send the order to your backend
    console.log('Order submitted:', { items: cartItems, shipping: formData })
    clearCart()
    router.push('/order-confirmation')
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <button
            onClick={() => router.push('/')}
            className="text-white bg-gray-800 hover:bg-gray-700 px-6 py-2 rounded"
          >
            Return to Shop
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <OrderSummary 
          cartItems={cartItems}
          totalQuantity={totalQuantity}
          totalPrice={totalPrice}
        />

        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
          
          <div className="grid gap-4">
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
            className="w-full bg-gray-800 text-white py-3 px-6 rounded hover:bg-gray-700 mt-6"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  )
}

