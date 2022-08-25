import React from "react";

export const SearchBar = ({
  searchTitle,
  onChangeSearch,
  onSearch,

  filteredItems,
}) => {
  //   const [textInput, setTextInput] = useState("");
  const placeholderText = "What is it that you truly desire?";

  function handleChange(e) {
    onChangeSearch({ searchTitle: e });
    onSearch({ searchTerm: e });
  }

  return (
    <div>
      {/* <>Search Term: {textInput ? <p>{textInput}</p> : null}</> */}
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
        {searchTitle && searchTitle.length > 2 && filteredItems.length === 0 ? (
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
