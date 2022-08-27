import React, { useState } from "react";
import logo from "../../imgs/logo.png";
import { SearchBar } from "./SearchBar";

const Banner = ({
  searchTitle,
  onChangeSearch,
  onSearch,
  items,
  filteredItems,
}) => {
  const [showSearch, setShowSearch] = useState(false);

  function handleClick() {
    if (showSearch === false) {
      setShowSearch(true);
    }
  }

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div className="text-decoration-none justify-content-center px-2 row m-auto w-100">
          <span className="px-2" id="get-part">
            A place to{" "}
            <span
              id="get-part"
              className="text-decoration-none bg-none border-0 "
              onClick={() => handleClick()}
            >
              get
            </span>
          </span>
          {showSearch ? (
            <SearchBar
              searchTitle={searchTitle}
              onChangeSearch={onChangeSearch}
              onSearch={onSearch}
              items={items}
              filteredItems={filteredItems}
            />
          ) : null}
          <span className="px-1"> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
