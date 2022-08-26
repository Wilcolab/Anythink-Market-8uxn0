import React, { useState, useEffect } from "react";

export const SearchBarMessage = ({ searchTitle, filteredItems }) => {
  const [filteredItemsLength, setFilteredItemsLength] = useState(1);

  useEffect(() => {
    if (filteredItems) {
      setTimeout(() => {
        setFilteredItemsLength(filteredItems.length);
      }, 3000);
    }
  }, [filteredItems]);

  return (
    <div className="m-auto" style={{ width: "500px" }}>
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
  );
};
