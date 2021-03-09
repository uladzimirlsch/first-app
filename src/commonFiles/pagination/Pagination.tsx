import React, {FC} from 'react';
import styles from "./Pagination.module.css";
import {useState} from "react";
import cn from "classnames";

type PropsType = {
    currentPage: number
    onPageChange: (page: number) => void
    pageSize: number
    totalItemCount: number
    pageLimit?: number
}

const Pagination: FC<PropsType> = ({currentPage, onPageChange, pageSize, totalItemCount, pageLimit = 10}) => {

    let pagesCount = Math.ceil(totalItemCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(totalItemCount / pageLimit)

    let [portionNumber, setPortionNumber] = useState(1)

    let leftPortionNumber = (portionNumber - 1) * pageLimit + 1

    let rightPortionNumber = portionNumber * pageLimit

    return (
        <div className={styles.pag}>
            {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}
            {pages
                .filter(page => (page >= leftPortionNumber) && (page <= rightPortionNumber))
                .map(page => (
                    <span key={page} className={cn({[styles.activePage]: currentPage === page}, styles.pageNumber)}
                          onClick={() => {
                              onPageChange(page)
                          }}>{page}</span>)
                )
            }
            {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
        </div>
    );
};

export default Pagination;