import {useUserContext} from "../context/userContextProvider";

const CreateNew = () => {

    const{
        cancelAndSendToIndexPage,
        handleCreateClick,
        formData,
        setFormData
    } = useUserContext()

    return (
        <>
            <form>
                <p>name</p>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    required
                    autoComplete="off"
                    onChange={(e)=>setFormData({...formData, firstName: e.target.value})}
                />
                <p>email</p>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    autoComplete="off"
                    required
                    onChange={(e)=>setFormData({...formData, email: e.target.value})}
                />
                <p>age</p>
                <input
                    id="city"
                    type="text"
                    name="city"
                    value={formData.city}
                    autoComplete="off"
                    required
                    onChange={(e)=>setFormData({...formData, city: e.target.value})}
                />
                <button onClick={handleCreateClick}>add new</button>
            </form>
            <button onClick={cancelAndSendToIndexPage}>cancel</button>

        </>
    )
}

export default CreateNew;