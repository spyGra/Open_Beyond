import {useEffect, useState} from "react";
import {useTableContext} from "../context/userContextProvider";
import {useHistory} from "react-router-dom";

const TableComponent = () => {
    const history = useHistory()

    const{
        setAllUsersList,
        allUsersList,
        handleDeleteClick
    } = useTableContext()

    useEffect(()=>{
        fetch('http://localhost:5000/users')
            .then(response => response.json())
            .then(data => setAllUsersList(data))
            .catch(err=>console.log(err))
    },[])




    const users = allUsersList.map((item) => {
        return (
            <div key={item.id}>
                <div id={item.id} >name:{item.name}, email:{item.email}</div>
                <button onClick={()=>history.push(`/view/${item.id}`)}>view</button>
                <button onClick={()=>history.push(`/update/${item.id}`)}>go to update new</button>
                <button onClick={()=>handleDeleteClick(item.id)}>delete</button>
            </div>
        )
    })

    return (
        <div>
            {users}
            <button onClick={()=>history.push(`/new`)}>go to new</button>
        </div>
    )
}

export default TableComponent;