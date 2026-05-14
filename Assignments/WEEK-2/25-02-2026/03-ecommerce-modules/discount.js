const coupons = {
  WELCOME10: { type: "percentage", value: 10, minAmount: 1000 },
  FLAT500: { type: "flat", value: 500, minAmount: 5000 }
};

export function applyDiscount(cartTotal, couponCode) {
  if (!couponCode)
    return { discount: 0, finalTotal: cartTotal };

  const coupon = coupons[couponCode];
  if (!coupon)
    return { discount: 0, finalTotal: cartTotal };

  if (cartTotal < coupon.minAmount)
    return { discount: 0, finalTotal: cartTotal };

  let discount = 0;

  if (coupon.type === "percentage") {
    discount = (cartTotal * coupon.value) / 100;
  } else {
    discount = coupon.value;
  }

  return {
    discount,
    finalTotal: cartTotal - discount
  };
}