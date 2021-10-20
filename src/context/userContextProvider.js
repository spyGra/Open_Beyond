import React,{useContext, createContext, useState} from "react";
import {useHistory} from "react-router-dom";

const tableContext = createContext('')

const UserContextProvider= ( {children} ) => {
    const [user, setUser] = useState({
            firstName: "",
            lastName: "",
            email: "",
            city: ""
        }
    );
    const [allUsersList, setAllUsersList] = useState([])
    const [totalUsersNumber, setTotalUsersNumber] = useState(0)
    const history = useHistory()
    const [page, setPage] = useState(1)


    const cancelAndSendToHomePage = () =>{
        setUser({
            firstName: "",
            lastName: "",
            email: "",
            city: ""
        })
        history.push("/admin")
    }

    const cancelValidation = (e) => {
        e.preventDefault()
        if(user.firstName || user.lastName || user.email || user.city){
            return false
        } else {
            history.push("/admin")
        }
    }

    const handleEditClick = (e, id) => {
        e.preventDefault()
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then(() => history.push('/admin'))
            .catch(err=>console.log(err))
        setUser({
            firstName: "",
            lastName: "",
            email: "",
            city: ""
        })
    }

    const handleCreateClick = (e) => {
        e.preventDefault()
        fetch('http://localhost:5000/users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then(() => history.push("/admin"))
            .catch(err=>console.log(err))
        setUser({
            firstName: "",
            lastName: "",
            email: "",
            city: ""
        })
    }

    const handleDeleteClick = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(() => fetch(`http://localhost:5000/users?_page=${page}`)
                .then(response =>{
                    setTotalUsersNumber(response.headers.get('X-Total-Count'))
                    return response.json()
                })
                .then(data => setAllUsersList(data))
                .catch(err=>console.log(err)))
    }

    return (
            <tableContext.Provider value={{
                cancelAndSendToHomePage,
                handleCreateClick,
                cancelValidation,
                handleEditClick,
                handleDeleteClick,
                user,
                setUser,
                totalUsersNumber,
                setTotalUsersNumber,
                page,
                setPage,
                allUsersList,
                setAllUsersList,
            }}>
                {children}
            </tableContext.Provider>
    )
}
export const useUserContext = () => {
    return useContext(tableContext)
}

export default UserContextProvider;