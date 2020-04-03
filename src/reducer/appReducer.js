export const appDefaultState = {
  search: "",
  yearIni: null,
  yearEnd: null
};

const appReducer = (state = appDefaultState, action) => {
  switch (action.type) {
    case "UPDATE_SEARCH":
      return { ...state, search: action.search };
    case "UPDATE_YEARS":
        return { ...state, yearIni: action.yearIni, yearEnd: action.yearEnd };
    default:
      return state;
  }
};

export default appReducer;