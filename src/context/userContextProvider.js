import React,{useContext, createContext, useState} from "react";
import {useHistory} from "react-router-dom";

const tableContext = createContext('')

const UserContextProvider= ( {children} ) => {
    const [allUsersList, setAllUsersList] = useState([])
    const [showModal, setShowModal] = useState(true)
    const history = useHistory()
    const [formData, setFormData] = useState({
        firstName: "",
        email: "",
        city:""
    })

    const changeModalVisibilityAndSendToIndexPage = () =>{
        changeModalVisibility()
        history.push("/index")
        setFormData({
            firstName: "",
            email: "",
            city:""
        })
    }

    const cancelAndSendToIndexPage = () => {
        if(formData.firstName || formData.email || formData.city){
            changeModalVisibility()
        } else {
            history.push("/index")
        }
    }

    const changeModalVisibility = () => {
        setShowModal(!showModal)
    }

    const handleEditClick = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify(formData),
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
    }

    const handleCreateClick = () => {
        fetch('http://localhost:5000/users', {
            method: 'POST',
            body: JSON.stringify(formData),
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
    }

    const handleDeleteClick = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then((json) => fetch('http://localhost:5000/users')
                .then(response => response.json())
                .then(data => setAllUsersList(data))
                .catch(err=>console.log(err)))
            .catch(err=>console.log(err))
    }

    return (
        <>
            <tableContext.Provider value={{
                changeModalVisibilityAndSendToIndexPage,
                changeModalVisibility,
                handleCreateClick,
                cancelAndSendToIndexPage,
                handleEditClick,
                handleDeleteClick,
                formData,
                setFormData,
                allUsersList,
                setAllUsersList,
                showModal,
            }}>
                {children}
            </tableContext.Provider>

        </>
    )
}
export const useTableContext = () => {
    return useContext(tableContext)
}

export default UserContextProvider;