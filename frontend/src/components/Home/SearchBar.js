import React from "react";

export const SearchBar = ({ searchTitle, onChangeSearch, onSearch }) => {
  const placeholderText = "What is it that you truly desire?";
  async function handleChange(e) {
    await onChangeSearch({ searchTitle: e });
    await onSearch({ searchTerm: e });
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
    </div>
  );
};
