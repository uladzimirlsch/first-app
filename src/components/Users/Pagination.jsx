import React from 'react';
import styles from "./Pagination.module.css";

const Pagination = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map(page => (
                <span className={(props.currentPage === page) && (styles.activePage)}
                      onClick={() => {
                          props.onPageChange(page)
                      }} key={page.id}>{page}</span>))}
        </div>

    );
};

export default Pagination;