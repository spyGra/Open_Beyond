import {useEffect, useState} from "react";

const ContactMe = () => {
 const [myData, setMyData] = useState()
    useEffect(()=>{
        const userId = sessionStorage.getItem(`userId`)
        fetch(`http://localhost:5000/auth/${userId}`)
            .then((response) => response.json())
            .then((data) => setMyData(data));
    },[])
    return (
        <div>
            {myData?.id}
        </div>
    )
}

export default ContactMe;