import {useEffect} from "react";
import {useUserContext} from "../context/userContextProvider";
import {useHistory} from "react-router-dom";
import Pagination from "../containers/Pagination";

const TableComponent = () => {
    const history = useHistory()
    const{
        setTotal,
        page,
        setAllUsersList,
        allUsersList,
        handleDeleteClick
    } = useUserContext()

    useEffect(()=>{
        fetch(`http://localhost:5000/users?_page=${page}`)
            .then(response => {
                setTotal(response.headers.get('X-Total-Count'))
               return response.json()
            })
            .then(data => setAllUsersList(data))
            .catch(err=>console.log(err))
    },[page])

    const users = allUsersList.map((item) => {
        return (
            <tr key={item.id}>
                <td className="col-8"><div className="float-start" id={item.id} >{item.firstName} {item.lastName}</div></td>

                <td><button
                    type="button"
                    onClick={()=>history.push(`/admin/view/${item.id}`)}
                    className="btn btn-outline-info">
                    <i className="bi bi-info-circle"/> info</button></td>
                <td><button
                    type="button"
                    onClick={()=>history.push(`/admin/update/${item.id}`)}
                    className="btn btn-outline-success">
                    <i className="bi bi-pencil"/>edit</button></td>
                <td><button
                    type="button" onClick={()=>handleDeleteClick(item.id)}
                    className="btn btn-outline-danger">
                    <i className="bi bi-trash" />delete</button></td>
            </tr>
        )
    })

    return (
            <div className="my-2">
                <table className="table caption-top">
                    <tbody>
                    <tr className="bg-primary text-light">
                        <td className="col-8">Name</td>
                        <td>Info</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                    {users}
                    </tbody>
                </table>

                <div className="my-4">
                    <Pagination />
                </div>

                <div className="d-flex justify-content-center">
                    <button className="my-4 btn btn-outline-primary" onClick={()=>history.push(`/admin/new`)}>Make new user</button>
                </div>
            </div>
    )
}

export default TableComponent;