import {useEffect, useState} from "react";
import {useUserContext} from "../context/userContextProvider";
import {useHistory} from "react-router-dom";

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
            <div key={item.id}>
                <div id={item.id} >name:{item.name}, email:{item.email}</div>
                <button onClick={()=>history.push(`/admin/view/${item.id}`)}>view</button>
                <button onClick={()=>history.push(`/admin/update/${item.id}`)}>update</button>
                <button onClick={()=>handleDeleteClick(item.id)}>delete</button>
            </div>
        )
    })

    return (
        <div>
            {users}
            <button onClick={()=>history.push(`/admin/new`)}>go to new</button>
        </div>
    )
}

export default TableComponent;