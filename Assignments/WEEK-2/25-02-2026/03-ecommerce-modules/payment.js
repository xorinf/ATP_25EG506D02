import { reduceStock } from "./product.js";
import { getCartItems, getCartTotal, clearCart } from "./cart.js";
import { applyDiscount } from "./discount.js";

export function processPayment(method, couponCode = null) {
  const items = getCartItems();
  if (items.length === 0)
    return { status: "failed", message: "Cart is empty" };

  if (method !== "card" && method !== "upi" && method !== "cod")
    return { status: "failed", message: "Invalid payment method" };

  const subtotal = getCartTotal();
  const discountData = applyDiscount(subtotal, couponCode);

  for (let i = 0; i < items.length; i++) {
    reduceStock(items[i].id, items[i].quantity);
  }

  clearCart();

  return {
    orderId: "ORD" + Date.now(),
    items,
    subtotal,
    discount: discountData.discount,
    total: discountData.finalTotal,
    paymentMethod: method,
    status: "success"
  };
}