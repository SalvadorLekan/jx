import StoreItem from "../components/StoreItem";

function StoreItems({
  items,
  slug,
  currency,
  query = "",
}: {
  items?: shopItem[];
  slug: string;
  currency: string;
  query?: string;
}) {
  return (
    <div id="store-items" className="row">
      {items
        ?.filter((item) =>
          item.productName
            .toLocaleLowerCase()
            .includes(query.toLocaleLowerCase())
        )
        .map((item) => (
          <StoreItem
            slug={slug}
            currency={currency}
            key={item.id}
            item={item}
          />
        ))}
    </div>
  );
}

export default StoreItems;
