import React, {FC, useState} from 'react';
import styles from "./Pagination.module.scss";
import cn from "classnames";

type PropsType = {
    currentPageNumber: number
    onPageChangeNumber: (pageNum: number) => void
    pageSizeNumber: number
    totalItemCount: number
    pageLimit?: number
}

export const Pagination: FC<PropsType> = ({
                                              currentPageNumber,
                                              onPageChangeNumber,
                                              pageSizeNumber,
                                              totalItemCount,
                                              pageLimit = 10
                                          }) => {

    let pagesCount = Math.ceil(totalItemCount / pageSizeNumber)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(totalItemCount / pageLimit)

    let [portionNumber, setPortionNumber] = useState(1)

    let leftPortionNumber = (portionNumber - 1) * pageLimit + 1

    let rightPortionNumber = portionNumber * pageLimit

    return (
        <div className={styles.page}>
            {portionNumber > 1 && <button
                type={'submit'}
                onClick={() => setPortionNumber(portionNumber - 1)}>prev</button>}
            {pages
                .filter(page => (page >= leftPortionNumber) && (page <= rightPortionNumber))
                .map(page => (
                    <span key={page}
                         className={cn({[styles.activePage]: currentPageNumber === page}, styles.pageNumber)}
                         onClick={() => {
                             onPageChangeNumber(page)
                         }}>{page}</span>)
                )
            }
            {portionCount > portionNumber && <button
                type={'submit'}
                onClick={() => setPortionNumber(portionNumber + 1)}>next</button>}
        </div>
    )
}
