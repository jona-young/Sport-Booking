import React, { useState, useEffect } from 'react';
import { getProfile } from './authenticationFunctions'
import './Profile.css';

function Profile() {
    const [profile, setProfile] = useState()

    const onProfileUpdate = (value) => {
        setProfile(value);
    };

    useEffect(() => {
        getProfile(onProfileUpdate);
    }, [localStorage.getItem('user_id')])

    return (
        <div className="profile">
            <span className="profile__mainHeading">
                Profile
            </span>
            <br /><br />
            <span className="profile__subHeading">
                Username
            </span>
            <br />
            { profile ? profile.username : '' }
            <br /><br />
            <span className="profile__subHeading">
                First Name
            </span>
            <br />
            { profile ? profile.first_name : ''}
            <br /><br />
            <span className="profile__subHeading">
                Last Name
            </span>            <br />
            { profile ? profile.last_name : ''}
            <br /><br />
            <span className="profile__subHeading">
                Email
            </span>            <br />
            { profile ? profile.email : ''}


        </div>
    )
}

export default Profile;