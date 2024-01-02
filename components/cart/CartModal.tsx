// const CartModal = () => {
//   return (
//     <div className="flex gap-4">
//       <button
//         className="rounded bg-gray-800 px-4 py-2 text-xs font-bold uppercase text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
//         onClick={() => {
//           addToCart(product);
//         }}
//       >
//         +
//       </button>
//       <p className="text-gray-600">
//         {cartItems.find((item) => item.id === product.id)?.quantity}
//       </p>
//       <button
//         className="rounded bg-gray-800 px-4 py-2 text-xs font-bold uppercase text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
//         onClick={() => {
//           const cartItem = cartItems.find((item) => item.id === product.id);
//           if (cartItem?.quantity === 1) {
//             handleRemoveFromCart(product);
//           } else {
//             removeFromCart(product);
//           }
//         }}
//       ></button>
//     </div>
//   );
// };

// export default CartModal;
