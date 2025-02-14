import { ICartItem } from "@/interfaces/ICartItem";
import Image from "next/image";
interface CartItemProps {
  item: ICartItem;
  onAdd: () => void;
  onRemove: () => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  item,
  onAdd,
  onRemove,
}) => (
  <div className="flex items-center justify-between" key={item.id}>
    <div className="flex gap-4">
      <Image
        src={item.imgSrc}
        alt={item.name || ""}
        className="h-24 w-24 rounded-md"
      />
      <div className="flex justify-center gap-8">
        <h1 className="text-lg font-bold">{item.id}</h1>
        <p className="text-gray-600">${item.price}</p>
      </div>
    </div>
    <div className="flex gap-4">
      <button
        className="rounded bg-gray-800 px-4 py-2 text-xs font-bold uppercase text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
        onClick={onRemove}
      >
        -
      </button>
      <p>{item.quantity}</p>
      <button
        className="rounded bg-gray-800 px-4 py-2 text-xs font-bold uppercase text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
        onClick={onAdd}
      >
        +
      </button>
    </div>
  </div>
);
