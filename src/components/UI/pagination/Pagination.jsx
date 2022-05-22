import React from "react";
import { usePagination } from "../../hooks/usePagination";

export default function Pagination({ totalPages, page, changePage, posts }) {
  let pagesArray = usePagination(totalPages, posts);

  return (
    <div className='page__wrapper'>
      {pagesArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? "page page__current" : "page"}
        >
          {p}
        </span>
      ))}
    </div>
  );
}
