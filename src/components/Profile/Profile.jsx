import './profile.css'
import { useContext } from 'react';
import { UserContext } from '../../Context/userContext';


export default function ProfileUser() {

    const {user} = useContext(UserContext)
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
                    <div className="container-img">
                        <div className="profile-image">
                            <a><img src={user.imgURL || 'https://static.vecteezy.com/system/resources/previews/011/948/549/original/profile-does-not-exist-icon-customer-white-contour-marked-with-red-line-remote-avatar-erased-from-online-memory-graphic-line-design-social-media-communication-and-correspondence-character-vector.jpg'} alt="Profile" /></a>
                        </div>
                        <div className="container-change-img">
                            <a className="change-img"> <i className='fa-regular fa-pen-to-square'></i>Edit</a>
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