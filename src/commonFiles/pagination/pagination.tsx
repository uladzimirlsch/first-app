import React, { FC, useState } from 'react';
import cn from 'classnames';
import styles from './pagination.module.scss';

type PropsType = {
  currentPageNumber: number;
  onPageChangeNumber: (pageNum: number) => void;
  pageSizeNumber: number;
  totalItemCount: number;
  pageLimit?: number;
};

export const Pagination: FC<PropsType> = ({
  currentPageNumber,
  onPageChangeNumber,
  pageSizeNumber,
  totalItemCount,
  pageLimit = 10,
}) => {
  const pagesCount = Math.ceil(totalItemCount / pageSizeNumber);

  const pages = [];
  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i);
  }

  const portionCount = Math.ceil(totalItemCount / pageLimit);

  const [portionNumber, setPortionNumber] = useState(1);

  const leftPortionNumber = (portionNumber - 1) * pageLimit + 1;

  const rightPortionNumber = portionNumber * pageLimit;

  return (
    <div className={styles.page}>
      {portionNumber > 1 && (
        <button type="submit" onClick={() => setPortionNumber(portionNumber - 1)}>
          Prev
        </button>
      )}
      {pages
        .filter((page) => page >= leftPortionNumber && page <= rightPortionNumber)
        .map((page) => (
          <span
            key={page}
            className={cn(
              { [styles.activePage]: currentPageNumber === page },
              styles.pageNumber,
            )}
            onClick={() => {
              onPageChangeNumber(page);
            }}
            aria-hidden="true"
          >
            {page}
          </span>
        ))}
      {portionCount > portionNumber && (
        <button type="submit" onClick={() => setPortionNumber(portionNumber + 1)}>
          Next
        </button>
      )}
    </div>
  );
};
