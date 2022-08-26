import React from "react";
import logo from "../../imgs/logo.png";
import { SearchBar } from "./SearchBar";

const Banner = ({
  searchTitle,
  onChangeSearch,
  onSearch,
  items,
  filteredItems,
}) => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div className="justify-content-center px-2 row m-auto w-100">
          <span className="px-2" id="get-part">
            A place to get
          </span>
          <SearchBar
            searchTitle={searchTitle}
            onChangeSearch={onChangeSearch}
            onSearch={onSearch}
            items={items}
            filteredItems={filteredItems}
          />
          <span className="px-2"> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
