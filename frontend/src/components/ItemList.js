import React from "react";
import ItemPreview from "./ItemPreview";
import ListPagination from "./ListPagination";

const ItemList = (props) => {
  const { searchTitle, items, filteredItems } = props;

  if (!props.items) {
    return <div className="py-4">Loading...</div>;
  }

  if (props.items.length === 0) {
    return <div className="py-4 no-items">No items are here... yet.</div>;
  }
  return (
    <div className="container py-2">
      <div className="row">
        {searchTitle &&
        searchTitle.length > 2 &&
        filteredItems &&
        filteredItems.length > 0 ? (
          <div>
            {filteredItems.map((item) => (
              <ItemPreview item={item} />
            ))}{" "}
          </div>
        ) : searchTitle &&
          searchTitle.length > 2 &&
          filteredItems.length === 0 ? (
          <div>
            <div className="card">
              <div className="card-body text-dark text-align-center">
                <h4>Warning You Searched Incorrectly!</h4>
                <p className="card-text">
                  We do not stock {searchTitle}, please search for something
                  better
                </p>
              </div>
            </div>
          </div>
        ) : (
          <>
            {items.map((item) => {
              return (
                <div className="col-sm-4 pb-2" key={item.slug}>
                  <div>
                    <ItemPreview item={item} />
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>

      <ListPagination
        pager={props.pager}
        itemsCount={props.itemsCount}
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default ItemList;
