import { CartItem } from '@/app/types/cart'

interface OrderSummaryProps {
  cartItems: CartItem[]
  totalQuantity: number
  totalPrice: number
}

export const OrderSummary = ({ cartItems, totalQuantity, totalPrice }: OrderSummaryProps) => (
  <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
    <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
    <ul className="space-y-4">
      {cartItems.map((item) => (
        <li key={item.id} className="flex justify-between items-center py-2">
          <div className="flex items-center gap-4">
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
            </div>
          </div>
          <span className="font-medium">${(item.price * (item.quantity || 0)).toFixed(2)}</span>
        </li>
      ))}
    </ul>
    <div className="border-t border-gray-200 mt-6 pt-6 space-y-3">
      <div className="flex justify-between text-gray-600">
        <span>Total Items</span>
        <span>{totalQuantity}</span>
      </div>
      <div className="flex justify-between text-xl font-semibold">
        <span>Total Amount</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  </div>
) 