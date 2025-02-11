import { notifyAddedToCart } from "@/components/Cart/CartNotifications";
import { ICartActions } from "@/interfaces/ICartActions";
import { IProduct } from "@/interfaces/IProduct";

export const CartActions: React.FC<ICartActions> = ({
    product,
    addToCart,
    removeFromCart,
    cartItems,
  }) => {
    function handleRemoveFromCart(product: IProduct) {
      // TODO: implement
    }
  
    return (
      <div className="mt-6 flex items-center justify-between">
        {!cartItems.some((item) => item.id === product.id) ? (
          <button
            className="rounded bg-gray-800 px-4 py-2 text-xs font-bold uppercase text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
            onClick={() => {
              addToCart(product);
              notifyAddedToCart(product);
            }}
          >
            Add to cart
          </button>
        ) : (
          <div className="flex gap-4">
        
            <button
              className="rounded bg-gray-800 px-4 py-2 text-xs font-bold uppercase text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
              onClick={() => {
                const cartItem = cartItems.find(
                  (item) => item.id === product.id,
                );
  
                if (cartItem?.quantity === 1) {
                  handleRemoveFromCart(product);
                } else {
                  removeFromCart(product);
                }
              }}
            >
              -
            </button>
            <p className="text-gray-600">
              {cartItems.find((item) => item.id === product.id)?.quantity || 0}
            </p>
  
            <button
              className="rounded bg-gray-800 px-4 py-2 text-xs font-bold uppercase text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
              onClick={() => {
                addToCart(product);
              }}
            >
              +
            </button>
          </div>
        )}
      </div>
    );
  };