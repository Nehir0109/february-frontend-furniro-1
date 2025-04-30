// Utils/calculateTotalPrice.js
const calculateTotalPrice = (items) => {
  if (!Array.isArray(items)) return 0;
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

export default calculateTotalPrice;
