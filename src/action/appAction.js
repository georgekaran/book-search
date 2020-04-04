export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export const UPDATE_YEARS = "UPDATE_YEARS";
export const UPDATE_PAGE_PROPS = "UPDATE_PAGE_PROPS";
export const UPDATE_PAGE = "UPDATE_PAGE";

export const updateSearch = (search) => ({
    type: UPDATE_SEARCH,
    search
});

export const updateYears = (name, year) => ({
    type: UPDATE_YEARS,
    name,
    year
});

export const updatePageProps = (page, totalPages) => ({
  type: UPDATE_PAGE_PROPS,
  page,
  totalPages
});

export const updatePage = (page) => ({
  type: UPDATE_PAGE,
  page
});