import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAIL,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS
} from "./constants";

export const changeSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const requestRobots = () => dispatch => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      return res.json();
    })
    .then(data => {
      dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data });
    })
    .catch(e => {
      dispatch({ type: REQUEST_ROBOTS_FAIL, payload: e });
    });
};
