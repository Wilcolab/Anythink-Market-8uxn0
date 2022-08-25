import React, { useState, useEffect } from "react";

export const SearchBar = ({
  searchTitle,
  onChangeSearch,
  onSearch,
  filteredItems,
}) => {
  const [filteredItemsLength, setFilteredItemsLength] = useState(1);

  const placeholderText = "What is it that you truly desire?";
  async function handleChange(e) {
    await onChangeSearch({ searchTitle: e });
    await onSearch({ searchTerm: e });
  }
  useEffect(() => {
    if (filteredItems) {
      setFilteredItemsLength(filteredItems.length);
    }
  }, [filteredItems]);

  return (
    <div>
      <input
        style={{ width: "350px" }}
        className="border border-primary border-1 rounded-sm"
        id="search-box"
        type="text"
        placeholder={placeholderText}
        value={searchTitle}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div>
        <div>filtered items length: {filteredItemsLength}</div>
        {searchTitle && searchTitle.length > 2 && filteredItemsLength === 0 ? (
          <div>
            <div className="card p-4 m-2">
              <div className="card-body text-dark text-align-center">
                <h4>Warning You Searched Incorrectly!</h4>
                <p className="card-text">
                  We do not stock {searchTitle}, please search for something
                  better
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
