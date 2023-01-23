import { useEffect } from 'react'
import './Pagination.scss'

const Pagination = ({
    postsPerPage,
    totalPosts,
    setCurrentPage,
    currentPage
}) => {
    const pageNumbers = Array(Math.ceil(totalPosts / postsPerPage))
        .fill(1)
        .map((e, i) => i + 1)
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li
                        key={number}
                        className={`page_item ${currentPage===number && 'page_item_active'}`}
                        onClick={() => {
                            setCurrentPage(() => number)
                        }}
                    >
                        {number}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
