const data = require("../utils/data.json") || [];

export const appDefaultState = {
  listOriginal: data,
  list: data,
  search: "",
  yearIni: null,
  yearEnd: null,
  page: 1,
  totalPages: 0,
  handlePaginationChange: () => undefined,
};

const appReducer = (state = appDefaultState, action) => {
  switch (action.type) {
    case "UPDATE_SEARCH":
      console.log(action);
      return { ...state, search: action.search };
    case "UPDATE_YEARS":
      return { ...state, [action.name]: action.year };
    case "UPDATE_PAGE_PROPS":
      return {
        ...state,
        page: action.page,
        totalPages: action.totalPages,
      };
    case "UPDATE_PAGE":
      return {
        ...state,
        page: action.page
      };
    default:
      return state;
  }
};

export default appReducer;
