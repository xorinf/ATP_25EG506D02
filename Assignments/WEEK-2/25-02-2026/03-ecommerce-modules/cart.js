import { getProductById, checkStock } from "./product.js";

let cartItems = [];

export function addToCart(productId, quantity) {
  const product = getProductById(productId);
  if (!product) return "Product not found";

  if (!checkStock(productId, quantity))
    return "Not enough stock";

  const existing = cartItems.find(i => i.productId === productId);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cartItems.push({ productId, quantity });
  }

  return "Added to cart";
}

export function removeFromCart(productId) {
  cartItems = cartItems.filter(i => i.productId !== productId);
  return "Removed from cart";
}

export function updateQuantity(productId, newQuantity) {
  if (!checkStock(productId, newQuantity))
    return "Not enough stock";

  const item = cartItems.find(i => i.productId === productId);
  if (!item) return "Item not in cart";

  item.quantity = newQuantity;
  return "Quantity updated";
}

export function getCartItems() {
  return cartItems.map(item => {
    const product = getProductById(item.productId);
    return {
      name: product.name,
      price: product.price,
      quantity: item.quantity,
      total: product.price * item.quantity
    };
  });
}

export function getCartTotal() {
  let total = 0;
  const items = getCartItems();
  for (let i = 0; i < items.length; i++) {
    total = total + items[i].total;
  }
  return total;
}

export function clearCart() {
  cartItems = [];
}