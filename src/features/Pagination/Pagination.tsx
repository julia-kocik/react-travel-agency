import './Pagination.scss'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = Array(Math.ceil(totalPosts / postsPerPage))
        .fill(1)
        .map((e, i) => i + 1)
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li key={number} className="page-item">
                        <a
                            onClick={() => paginate(number)}
                            href="#!"
                            className="page-link"
                        >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
