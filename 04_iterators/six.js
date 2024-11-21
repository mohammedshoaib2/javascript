const shopping_cart = [
  {
    item_name: "js course",
    item_price: 2999,
  },
  {
    item_name: "js course",
    item_price: 2999,
  },
  {
    item_name: "java course",
    item_price: 539,
  },
  {
    item_name: "react course",
    item_price: 799,
  },
  {
    item_name: "python course",
    item_price: 299,
  },
  {
    item_name: "cpp course",
    item_price: 1279,
  },
];

const total_cart_value = shopping_cart.reduce((acc, curr) => {
  return acc + curr.item_price;
}, 0);

// let total_cart_value = 0;
// for (const element of shopping_cart) {
//   total_cart_value = total_cart_value + element.item_price;
// }

console.log(`Totlal : ${total_cart_value}/-`);
