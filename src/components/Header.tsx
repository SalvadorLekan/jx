import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import { openCart } from "../toolkit/slices/cartToggle";

function Header({
  slug,
  storeName,
  by,
}: {
  slug: string;
  storeName: string;
  by: string;
}) {
  const [state, setstate] = useState("d-none");

  let dispatch = useDispatch();
  return (
    <header className="px-4 mx-auto" style={{ maxWidth: 1600 }}>
      <nav className="nav-salv d-flex justify-content-between align-items-start py-3">
        <NavLink
          className="nav-logo p-1"
          to={"/shop/" + slug}
          style={{ zIndex: 9, position: "relative" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="white"
            className="bi bi-bootstrap-fill"
            viewBox="0 0 16 16"
          >
            <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z" />
            <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z" />
          </svg>
        </NavLink>
        <div className="nav-center text-center" style={{ maxWidth: "70%" }}>
          <h1 className="font-weight-bold">{storeName}</h1>
          <div
            className="hide-scroll"
            style={{ overflow: "hidden", transition: "height 5s ease-in-out" }}
          >
            <NavLink
              to={`/shop/${slug}/about`}
              className="nav-center-owner font-weight-bolder text-white"
            >
              By {by}
            </NavLink>
            {/* <p className="tagline">{message}</p> */}
          </div>
        </div>
        <div className="nav-right">
          <button
            className="d-none btn d-md-inline-block"
            style={{ zIndex: 9, position: "relative" }}
            onClick={() => dispatch(openCart())}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="white"
              className="bi bi-bag-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
            </svg>
          </button>
          <button
            className="d-inline-block d-md-none btn"
            onClick={() => setstate("")}
          >
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
          </button>
        </div>
      </nav>
      <SearchBar
        extraClassName={
          "absolute top-0 left-0 right-0 m-3 d-md-none d-flex " + state
        }
        onBlur={() => setstate("d-none")}
      />
    </header>
  );
}

export default Header;
