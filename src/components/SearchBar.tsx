import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../toolkit";
import { editText } from "../toolkit/slices/search";

function SearchBar({
  extraClassName = "",
  onBlur = () => {},
}: {
  extraClassName?: string;
  onBlur?: Function;
}) {
  const search = useSelector((state: RootState) => state.search.param);
  const dispatch = useDispatch();
  return (
    <div
      className={`search-bar rounded ${extraClassName}`}
      style={{ flexShrink: 1 }}
    >
      <label htmlFor="product">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="white"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </label>
      <input
        className="text-white"
        type="search"
        name="product"
        id="product"
        placeholder="search by product"
        value={search}
        onChange={(e) => dispatch(editText(e.target.value))}
        onBlur={() => onBlur()}
      />
    </div>
  );
}

export default SearchBar;
