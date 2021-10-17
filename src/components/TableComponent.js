import {useEffect, useState} from "react";
import {useUserContext} from "../context/userContextProvider";
import {useHistory} from "react-router-dom";
import Pagination from "../containers/Pagination";

const TableComponent = () => {
    const [modalItemId, setModalItemId] = useState("")
    const [modalItemName, setModalItemName] = useState("")
    const [modalItemLastName, setModalItemLastName] = useState("")
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
                    className="btn btn-outline-info"
                >
                    <i className="bi bi-info-circle"/> info</button></td>
                <td><button
                    type="button"
                    onClick={()=>history.push(`/admin/update/${item.id}`)}
                    className="btn btn-outline-success"
                >
                    <i className="bi bi-pencil"/>edit</button></td>
                <td><button
                    type="button" onClick={()=>{
                        setModalItemId(item.id)
                        setModalItemName(item.firstName)
                        setModalItemLastName(item.lastName)
                }}
                    className="btn btn-outline-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#reg-modal"
                >
                    <i className="bi bi-trash" />delete</button></td>
            </tr>
        )
    })

    return (
        <>
        <section>
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
        </section>
    {/*Modal*/}
    <div className="modal fade" id="reg-modal" aria-labelledby="modal-title" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Delete</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>
                        Are you sure you want to delete the user {modalItemName} {modalItemLastName}?
                    </p>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-danger"
                            data-bs-dismiss="modal"
                            onClick={()=>handleDeleteClick(modalItemId)}
                    >Yes</button>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default TableComponent;