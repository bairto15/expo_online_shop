import * as actions from "./actionTypes";

const initial_state = [
  {
    login: "out",
  },
];

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case actions.LOGIN_IN:
      return state.map((item) => {
        if (item.login) {
          item.login = "in";
          return item;
        }
        return item;
      });

    case actions.LOGIN_OUT:
      return state.map((item) => {
        if (item.login) {
          item.login = "out";
          return item;
        }
        return item;
      });

    default:
      return state;
  }
}
