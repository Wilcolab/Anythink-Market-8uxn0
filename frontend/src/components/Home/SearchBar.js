import React from "react";

export const SearchBar = ({ searchTitle, onChangeSearch, onSearch, items }) => {
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
    </div>
  );
};
