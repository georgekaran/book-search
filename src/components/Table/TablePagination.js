import React, { useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import {
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

import { useStateValue } from "../../context/Context";

const TablePagination = () => {
  const [{ page, totalPages }, contextDispatch] = useStateValue();

  const isCurrentPage = useCallback((pageNumber) => pageNumber === page, [
    page,
  ]);

  const isFirstPage = useMemo(() => page === 1, [page]);

  const isLastPage = useMemo(() => page === totalPages, [page, totalPages]);

  const totalPagesArray = useMemo(() => {
    if (totalPages > 0) {
      const totalBegin = page - 4 <= 0 ? 0 : page - 4;
      const totalEnd = page + 3 >= totalPages ? totalPages : page + 3;
      const newPageArray = new Array(totalPages);
      for (let i = 1; i <= totalPages; i++) {
        newPageArray[i - 1] = i;
      }
      return newPageArray.slice(totalBegin, totalEnd);
    }
    return [];
  }, [totalPages, page]);

  const handlePaginationItemClick = (pageToGo) => {
    contextDispatch({ type: "UPDATE_PAGE", page: pageToGo });
  };

  const shouldRenderLastPagination = useCallback(() => {
    return !isLastPage && totalPages > 0
  }, [isLastPage, totalPages])

  return (
    <CardFooter className="py-4">
      <nav aria-label="...">
        <Pagination
          className="pagination justify-content-center mb-0"
          listClassName="justify-content-center mb-0"
        >
          {!isFirstPage && (
            <>
              <PaginationItem>
                <PaginationLink
                  onClick={() => handlePaginationItemClick(1)}
                  tabIndex="-1"
                >
                  <i className="fas fa-angle-double-left" />
                  <span className="sr-only">Primeira página</span>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  onClick={() => handlePaginationItemClick(page - 1)}
                  tabIndex="-1"
                >
                  <i className="fas fa-angle-left" />
                  <span className="sr-only">Anterior</span>
                </PaginationLink>
              </PaginationItem>
            </>
          )}
          {totalPagesArray.map((page) => {
            return (
              <PaginationItem
                key={page}
                className="active"
                disabled={isCurrentPage(page)}
              >
                <PaginationLink onClick={() => handlePaginationItemClick(page)}>
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          })}
          {shouldRenderLastPagination() && (
            <>
              <PaginationItem>
                <PaginationLink
                  onClick={() => handlePaginationItemClick(page + 1)}
                >
                  <i className="fas fa-angle-right" />
                  <span className="sr-only">Próximo</span>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  onClick={() => handlePaginationItemClick(totalPages)}
                  tabIndex="-1"
                >
                  <i className="fas fa-angle-double-right" />
                  <span className="sr-only">Última página</span>
                </PaginationLink>
              </PaginationItem>
            </>
          )}
        </Pagination>
      </nav>
    </CardFooter>
  );
};

TablePagination.propTypes = {
  last: PropTypes.bool,
  first: PropTypes.bool,
  totalPages: PropTypes.number,
  number: PropTypes.number,
};

export default TablePagination;
