import {useUserContext} from "../context/userContextProvider";

const Pagination = () => {
    const {
        total,
        page,
        setPage
    } = useUserContext()

    const pageNumbers = parseInt(total / 10) + 1

    let pageButtons = []
    for(let i=0; i<pageNumbers ; i++){
        pageButtons.push(<li className="page-item" key={i}><button className="page-link" onClick={()=>setPage(i + 1)}>{i + 1}</button></li>)
    }

    return (
        <div className="d-flex justify-content-center">
            <nav aria-label="Page navigation">
                <ul className="pagination">
                    <button className="page-link" onClick={() => setPage(prev => Math.max(prev -1, 1))}>Previous</button>
                    {pageButtons}
                    <button className="page-link" onClick={() => setPage(prev =>(page === pageNumbers? prev: prev+1))}>Next</button>
                </ul>
            </nav>
        </div>

    )
}

export default Pagination;