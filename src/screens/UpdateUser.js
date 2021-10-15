import {useUserContext} from "../context/userContextProvider";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const UpdateUser = () => {
    const [user, setUser] = useState();

    const {
        cancelAndSendToIndexPage,
        handleEditClick,
        formData,
        setFormData
    } = useUserContext();

    const params = useParams();
    const id = params.id

    useEffect(()=>{
        fetch(`http://localhost:5000/users/${id}`)
            .then((response) => response.json())
            .then((data) => setUser(data));
    },[])

    return (
        <>
            <form>
                <p>name</p>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    defaultValue={user?.firstName}
                    required
                    autoComplete="off"
                    onChange={(e)=>setFormData({...formData, firstName: e.target.value})}
                />
                <p>email</p>
                <input
                    id="email"
                    type="email"
                    name="email"
                    defaultValue={user?.email}
                    autoComplete="off"
                    required
                    onChange={(e)=>setFormData({...formData, email: e.target.value})}
                />
                <p>age</p>
                <input
                    id="city"
                    type="text"
                    name="city"
                    defaultValue={user?.city}
                    autoComplete="off"
                    required
                    onChange={(e)=>setFormData({...formData, city: e.target.value})}
                />
                <button onClick={()=>handleEditClick(id)}>update</button>
            </form>
            <button onClick={cancelAndSendToIndexPage}>cancel</button>
            create
        </>
    )
}

export default UpdateUser;