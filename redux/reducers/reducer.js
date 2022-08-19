import { NAVBARTOGGLED, NAVBARCLICKED } from "../actionTypes";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  navbarOpened: false,
};

export default function reduce(state = initialState, action) {
  if (action.type === HYDRATE) {
    console.log(action.payload, "action.users");
    const nextState = {
      ...state, // use previous state
      ...action.payload.main, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else if (action.type === NAVBARTOGGLED)
    return {
      ...state,
      navbarOpened: !state.navbarOpened,
    };
  else if (action.type === NAVBARCLICKED)
    return {
      ...state,
      navbarOpened: false,
    };
  else {
    return state;
  }
}

const navbarToggle = (state = initialState.navbarToggle, action) => {
  switch (action.type) {
    case NAVBARTOGGLED:
      return (initialState.navbarToggle = !state);
    case NAVBARCLICKED:
      return (initialState.navbarToggle = true);

    default:
      return state;
  }
};

// export default navbarToggle;
