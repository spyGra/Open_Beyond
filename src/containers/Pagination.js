import {useUserContext} from "../context/userContextProvider";

const Pagination = () => {
    const {
        totalUsersNumber,
        page,
        setPage,
    } = useUserContext()

    const totalPagesNumber= Math.ceil(totalUsersNumber / 10)

    let pageButtonNumbers = []
    for(let i=0; i<totalPagesNumber ; i++){
        pageButtonNumbers.push(
            <li
                className = {i+1 !== page? "page-item text-edit text-danger" : "page-item text-edit active"}
                key={i}><button className={i+1 !== page? "page-link text-primary": "page-link text-light"}
                onClick={()=>setPage(i + 1)}
            >{i + 1}</button></li>)
    }

    return (
        <div className="d-flex justify-content-center">
            <nav aria-label="Page navigation">
                <ul className="pagination">
                    <button
                        className="page-link"
                        onClick={() => setPage(prev => Math.max(prev -1, 1))}
                        disabled={page === 1}
                    >Previous</button>
                    {pageButtonNumbers}
                    <button
                        className="page-link"
                        onClick={() => setPage(prev =>(page === totalPagesNumber? prev: prev+1))}
                        disabled={page === totalPagesNumber}
                    >Next</button>
                </ul>
            </nav>
        </div>

    )
}

export default Pagination;