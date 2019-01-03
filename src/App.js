import React, { Component } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import ErrorBoundry from "./components/ErrorBoundry";
import { connect } from "react-redux";
import { changeSearchField, requestRobots } from "./actions";

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    data: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: e => dispatch(changeSearchField(e.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};
class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }
  render() {
    const { searchField, onSearchChange, data, isPending } = this.props;

    const filterRobots = data.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if (isPending) {
      return <p>Loading ...</p>;
    } else {
      return (
        <div className="tc">
          <h1>Robots Friends</h1>
          <SearchBox value={searchField} searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList data={filterRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
