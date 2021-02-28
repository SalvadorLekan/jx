export async function getstore(slug: string) {
  let res = await fetch(
    `https://manifest-salesapi.herokuapp.com/shops/${slug}`
  );
  return await res.json();
}

interface ComposeOrderProps {
  cartItems: {
    price: number;
    orderQuantity: number;
  }[];
  shopData: ShopData;
  customerName: string;
  customerEmail: string;
}

export function composeOrder({
  cartItems,
  shopData,
  customerName,
  customerEmail,
}: ComposeOrderProps) {
  return cartItems.reduce((prev, { orderQuantity, price }, ind) => {
    return orderQuantity
      ? [
          ...prev,
          {
            customerEmail,
            customerName,
            orderAmount: orderQuantity * price,
            orderQuantity,
            storeId: shopData.id,
            productId: ind,
            businessId: shopData.business.businessId,
          },
        ]
      : prev;
  }, [] as OrderToServer[]);
}

// cartItems.reduce((prev, curr, ind) => {
//   return curr.orderQuantity
//     ? [
//         ...prev,
//         <CartItem id={ind} key={ind} count={curr.orderQuantity} />,
//       ]
//     : [...prev];
// }, cc)

// [
//   {
//     customerEmail: "umebuike@gmail.com",
//     customerName: "Chibuike",
//     orderAmount: 4000,
//     orderQuantity: 1,
//     storeId: 1,
//     productId: 0,
//     businessId: 59,
//   },
//   {
//     customerEmail: "umebuike@gmail.com",
//     customerName: "Chibuike",
//     orderAmount: 4000,
//     orderQuantity: 1,
//     storeId: 1,
//     productId: 5,
//     businessId: 59,
//   },
//   {
//     customerEmail: "umebuike@gmail.com",
//     customerName: "Chibuike",
//     orderAmount: 4000,
//     orderQuantity: 1,
//     storeId: 1,
//     productId: 4,
//     businessId: 59,
//   },
// ]
