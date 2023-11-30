import './profile.css'
import { useContext, useEffect } from 'react';
import { UserContext } from '../../Context/userContext';
import { useMutation, gql } from '@apollo/client';
import { AlertsContext } from '../../Context/alertContext';


const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/db0ahcf7o/image/upload'
const CLOUDINARY_UPLOAD_PRESET = 'ryrlhihg'

const query = gql`
    mutation UpdateUser($id: ID!, $input: UserInput!) {
        updateUser(id: $id, input: $input) {
            imgURL
  }
}
`

export default function ProfileUser() {

    const {user, setUser, token} = useContext(UserContext)
    const {addAlert} = useContext(AlertsContext)

    const [UpdateUser, mutation] = useMutation(query)

    useEffect(() =>{
        if(mutation.error){
            addAlert(mutation.error.message, 'error')
        }

    },[user,mutation.loading])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', e.target.files[0])
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
        const res = await fetch(CLOUDINARY_URL, {
            method: 'POST',
            body: formData
        })

        const file = await res.json()

        const imgURL = file.secure_url

        const {data} = await UpdateUser({
            variables: {
                id: user.id,
                input: {
                    imgURL
                }
            },
            context: {
                headers: {
                    'x-token': token
                }
            }
        })

        setUser({...user, imgURL: data.updateUser.imgURL })
        addAlert('Image updated', 'success')

    }

    console.log(user)
    return ( <> {user &&         
            <div className='container-profile'>
                <h1>Profile Data</h1>
                <div className='profile'>
                    <div className="container-info">
                        <h2>Profile</h2>
                        <article className="profile-info">
                            <p>{user.firstName}</p>
                            <p>{user.lastName}</p>
                            <p>{user.country.name}</p>
                        </article>
                    </div>
                    <div className="perfil-usuario-header">
                        <div className="perfil-usuario-portada">
                            <div className="perfil-usuario-avatar">
                                <img src={user.imgURL} alt="img-avatar"/>
                                <form onSubmit={handleSubmit} className="boton-avatar">
                                    <input className='fa-regular fa-image' type="file" name="file" onChange={handleSubmit}></input>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='container-user'>
                        <h2>User Information</h2>
                        <article className="profile-info-user">
                            <p>{user.userName}</p>
                            <p>{user.email}</p>
                            <p>Password</p>
                        </article>
                    </div>
                </div>
            </div>
        }
        {
            !user && <h1>Loading...</h1>
        }
    </>
    )
}