import React from "react";
import { Pagination, Stack } from "@mui/material";
import btnNext from "../assets/images/buttons/paginationBtnNext.png"
import btnPrev from "../assets/images/buttons/paginationBtnBack.png"

interface PagProps {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  handlePageChange: (pageNumber: number) => void;
  //   handlePageChange: (event: ChangeEvent<unknown>) => void;
}

const PaginationComp: React.FC<PagProps> = ({
  itemsPerPage,
  totalItems,
  currentPage,
  handlePageChange,
}) => {
  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++)
    pageNumbers.push(i);

  return (
    <div className="container-pagination">
      {/* <Stack spacing={2}>
        <Pagination
          key={currentPage}
          count={pageNumbers.length}
          page={currentPage}
          showFirstButton
          showLastButton
          onChange={handlePageChange}
        />
      </Stack> */}
      <nav className="pagination-container">
        <button
          className="pagination-button-next"
          style={{backgroundImage:`url(${btnPrev})`}}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`pagination-button ${
              number === currentPage ? "active" : ""
            }`}
          >
            {number}
          </button>
        ))}

        <button
          className="pagination-button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === pageNumbers.length}
        >
          Next
        </button>
      </nav>
    </div>
  );
};

export default PaginationComp;
