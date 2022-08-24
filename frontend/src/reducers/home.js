import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  HOME_PAGE_SEARCH_TEXT,
} from "../constants/actionTypes";

const defaultState = {
  tags: [],
  searchTitle: "",
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case HOME_PAGE_LOADED:
      return {
        ...state,
        tags: action.payload[0].tags,
      };
    case HOME_PAGE_UNLOADED:
      return {};
    case HOME_PAGE_SEARCH_TEXT:
      if (action.payload.searchTitle.length > 2) {
        return { ...state, searchTitle: action.payload.searchTitle };
      }
      return { ...state, searchTitle: action.payload.searchTitle };

    default:
      return state;
  }
};

export default reducer;
