import { useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";
import StoreItem from "../components/StoreItem";
import { RootState } from "../toolkit";

function StoreItems({
  items,
  slug,
  currency,
}: {
  items?: ShopItem[];
  slug: string;
  currency: string;
}) {
  const query = useSelector((state: RootState) => state.search.param);
  return (
    <div id="store-items" className="row container mx-auto">
      <SearchBar extraClassName="d-none d-md-flex" />
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
