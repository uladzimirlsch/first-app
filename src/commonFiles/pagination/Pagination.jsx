import React from 'react';
import styles from "./Pagination.module.css";
import {useState} from "react";
import cn from "classnames";

const Pagination = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let pageLimit = 10

    let portionCount = Math.ceil(props.totalCount / pageLimit)

    let [portionNumber, setPortionNumber] = useState(1)

    let leftPortionNumber = (portionNumber - 1) * pageLimit + 1

    let rightPortionNumber = portionNumber * pageLimit

    return (
        <div className={styles.pag}>
            {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}
            {pages
                .filter(page => (page >= leftPortionNumber) && (page <= rightPortionNumber))
                .map(page => (
                <span key={page} className={cn ({[styles.activePage] : props.currentPage === page}, styles.pageNumber )}
                      onClick={() => {
                          props.onPageChange(page)
                      }}>{page}</span>)
            )
            }
            {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
        </div>
    );
};

export default Pagination;