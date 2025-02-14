import { CartItem } from '@/app/types/cart'

type OrderSummaryProps = {
  cartItems: CartItem[]
  totalQuantity: number
  totalPrice: number
}

export const OrderSummary = ({ cartItems, totalQuantity, totalPrice }: OrderSummaryProps) => (
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