
import { ICartActions } from "@/interfaces/ICartActions";
import { ProductDisplay } from "@/components/UI/Menu/ProductDisplay";
import { CartActions } from "./CartActions";
import { IProductCard, IProductDisplay } from "@/interfaces/IProductDisplay";

export const ProductCard: React.FC<IProductCard> = ({
  product,
  addToCart,
  removeFromCart,
  cartItems,
}) => {
  return (
    <div className="rounded-lg bg-white px-10 py-10 shadow-md">
      <ProductDisplay product={product} />
      <CartActions
        product={product}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cartItems={cartItems}
      />
    </div>
  );
};
