import {useUserContext} from "../context/userContextProvider";

const Pagination = () => {
    const {
        total,
        page,
        setPage
    } = useUserContext()

    const pageNumbers = parseInt(total / 10) + 1

    let pageButtons = []

    for(let i= 0; i<pageNumbers ; i++){
        pageButtons.push(<button onClick={()=>setPage(i + 1)} key={i}>{i + 1}</button>)
    }

    return (
        <>
        <button onClick={() => setPage(prev => Math.max(prev -1, 1))}>Previous page</button>
            {pageButtons}
        <button onClick={() => setPage(prev =>(page === pageNumbers? prev: prev+1))}>Next page</button>
        </>
    )
}

export default Pagination;