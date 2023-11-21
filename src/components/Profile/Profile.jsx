import './profile.css'
import { useContext } from 'react';
import { UserContext } from '../../Context/userContext';


export default function ProfileUser() {

    const {user} = useContext(UserContext)

    return (
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
                <div className="container-img">
                    <div className="profile-image">
                        <a><img src={user.imgURL} alt="Profile" /></a>
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
    )
}