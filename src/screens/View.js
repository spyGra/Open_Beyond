import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";




const View = () => {
    const [user, setUser] = useState();
    const params = useParams();
    const id = params.id

    useEffect(()=>{
        fetch(`http://localhost:5000/users/${id}`)
            .then((response) => response.json())
            .then((data) => setUser(data));
    },[])

    console.log("data",user)

    return (
        <>
            <p>{user?.firstName}</p>
            <p>{user?.email}</p>
            <p>{user?.city}</p>
        </>
    )
}

export default View;