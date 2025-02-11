import { addToCartAction, removeFromCartAction } from "@/context/CartActions";
import { CartContext } from "@/context/CartProvider";
import { useContext } from "react";

const CartModal = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  // Calculate totals
  const totalQuantity = cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 0)), 0);

  console.log(cartItems);

  return (
    <div className="flex items-center gap-4 fixed top-24 right-24 bg-white p-4 rounded-lg shadow-lg flex-col">
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((product) => (
            <div key={product.id} className="flex items-center justify-between gap-2 sticky top-0">
              <div>
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
              
              <button
                className="rounded bg-gray-800 px-4 py-2 text-xs font-bold uppercase text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
                onClick={() => addToCart(product)}
              >
                +
              </button>

              <p className="text-gray-600 min-w-[20px] text-center">
                {product.quantity || 0}
              </p>

              <button
                className="rounded bg-gray-800 px-4 py-2 text-xs font-bold uppercase text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
                onClick={() => removeFromCart(product)}
              >
                -
              </button>
            </div>
          ))}

          {/* Cart Summary */}
          {cartItems.length > 0 && (
            <div className="border-t pt-4 mt-2 w-full">
              <div className="flex justify-between">
                <p className="font-semibold">Total Items:</p>
                <p>{totalQuantity}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Total Price:</p>
                <p>${totalPrice.toFixed(2)}</p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CartModal;
