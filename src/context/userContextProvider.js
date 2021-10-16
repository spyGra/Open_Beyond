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
    const [showModal, setShowModal] = useState(true)
    const [total, setTotal] = useState(0)
    const history = useHistory()
    const [page, setPage] = useState(1)

    const changeModalVisibilityAndSendToHomePage = () =>{
        changeModalVisibility()
        setUser({
            firstName: "",
            lastName: "",
            email: "",
            city: ""
        })
        history.push("/admin")

    }

    const cancelAndSendToIndexPage = (e) => {
        e.preventDefault()
        if(user.firstName || user.lastName || user.email || user.city){
            changeModalVisibility()
        } else {
            history.push("/admin")
        }
    }

    const changeModalVisibility = () => {
        setShowModal(!showModal)
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
            .then((json) => fetch('http://localhost:5000/users')
                .then(response => response.json())
                .then(data => setAllUsersList(data))
                .catch(err=>console.log(err)))
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
            .then((json) => fetch('http://localhost:5000/users')
                .then(response => response.json())
                .then(data => setAllUsersList(data))
                .catch(err=>console.log(err)))
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
            .then((json) => fetch(`http://localhost:5000/users?_page=${page}`)
                .then(response => response.json())
                .then(data => setAllUsersList(data))
                .catch(err=>console.log(err)))
            .catch(err=>console.log(err))
    }

    return (
            <tableContext.Provider value={{
                changeModalVisibilityAndSendToHomePage,
                changeModalVisibility,
                handleCreateClick,
                cancelAndSendToIndexPage,
                handleEditClick,
                handleDeleteClick,
                user,
                setUser,
                total,
                setTotal,
                page,
                setPage,
                allUsersList,
                setAllUsersList,
                showModal,
            }}>
                {children}
            </tableContext.Provider>
    )
}
export const useUserContext = () => {
    return useContext(tableContext)
}

export default UserContextProvider;