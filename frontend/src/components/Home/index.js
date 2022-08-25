import Banner from "./Banner";
import MainView from "./MainView";
import React from "react";
import Tags from "./Tags";
import agent from "../../agent";
import { connect } from "react-redux";
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER,
  HOME_PAGE_SEARCH_TEXT,
  APPLY_TITLE_FILTER,
} from "../../constants/actionTypes";

const Promise = global.Promise;

const mapStateToProps = (state) => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token,
  searchTitle: state.home.searchTitle,
  items: state.items,
  itemList: state.itemList,
  searchedItems: state.searchedItems,
  filteredItems: state.itemList.filteredItems,
});

const mapDispatchToProps = (dispatch) => ({
  onClickTag: (tag, pager, payload) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
  onUnload: () => dispatch({ type: HOME_PAGE_UNLOADED }),
  onChangeSearch: (payload) =>
    dispatch({ type: HOME_PAGE_SEARCH_TEXT, payload }),
  onSearch: (payload) => dispatch({ type: APPLY_TITLE_FILTER, payload }),
});

class Home extends React.Component {
  componentWillMount() {
    const tab = "all";
    const itemsPromise = agent.Items.all;

    this.props.onLoad(
      tab,
      itemsPromise,
      Promise.all([agent.Tags.getAll(), itemsPromise()])
    );
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return (
      <div className="home-page">
        <Banner
          searchTitle={this.props.searchTitle}
          onChangeSearch={this.props.onChangeSearch}
          onSearch={this.props.onSearch}
          items={this.props.items}
          filteredItems={this.props.filteredItems}
        />

        <div className="container page">
          <Tags tags={this.props.tags} onClickTag={this.props.onClickTag} />
          <MainView
            itemList={this.props.itemList}
            searchTitle={this.props.searchTitle}
            searchedItems={this.props.searchedItems}
            filteredItems={this.props.filteredItems}
          />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
