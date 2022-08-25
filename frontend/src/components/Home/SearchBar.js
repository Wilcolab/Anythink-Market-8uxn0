import React from "react";

export const SearchBar = ({
  searchTitle,
  onChangeSearch,
  onSearch,
  filteredItems,
}) => {
  const placeholderText = "What is it that you truly desire?";
  let filteredItemsLength = 1000;
  async function handleChange(e) {
    onChangeSearch({ searchTitle: e });
    await onSearch({ searchTerm: e });
    filteredItemsLength = filteredItems.length;
  }

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
