import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Form = ( {GetCreatedProfile} ) => {

    const [profileName, setProfileName] = useState('');
    const [profileDescription, setProfileDescription] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const [profileEdited, setProfileEdited] = useState({});
    const [editProfile, setEditProfile] = useState(false);

    const refreshPage = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const profileNew = {
            name: profileName,
            description: profileDescription,
            thumbnailpath: profileImage
        }
        try {
            if (editProfile) {
                const response = await axios.post("http://localhost:8080/api/v1/addprofile", profileNew)
            } else {
                const response = await axios.post("http://localhost:8080/api/v1/addprofile", profileNew)
                
                if (response.status === 200) {
                    setProfileName('')
                    setProfileDescription('')
                    setProfileImage('')
                }
            }
            GetCreatedProfile()
            refreshPage('/create')
        } catch (error) {
            console.log(error)
        }
    }

   

    return (
        <form onSubmit={handleSubmit} editProfile={editProfile} profileEdited={profileEdited}>
            <div className="mb-3" className="dataEntryField">
                <label htmlFor="updateInputName1" className="form-label">Profile Name:</label>
                <input
                    placeholder='Enter Profile Name...'
                    type="text"
                    className="form-control"
                    id="updateInputName1"
                    aria-describedby="nameHelp"
                    value={profileName}
                    onChange={e => setProfileName(e.target.value)}
                />
                <div id="nameHelp" className="form-text"></div>
            </div>
            <br></br>
            <div className="mb-3" id="descriptionEntry">
                <label htmlFor="exampleFormControlTextarea1" className="form-label" id="description-field">Description:</label>
                <textarea
                    className="form-control"
                    rows="3"
                    placeholder='Enter Origin Story...'
                    value={profileDescription}
                    onChange={e => setProfileDescription(e.target.value)}
                >
                </textarea>
            </div>

            <div>
                <label htmlFor="formFileLg" className="form-label">Upload Your Hero / Villain Image</label>
                <input
                    className="form-control form-control-md"
                    id="formFilemd"
                    type="file"
                    value={profileImage}
                    onChange={e => setProfileImage(e.target.files[0])}
                />
            </div>

            <br></br>
            <button type="submit">
                {editProfile ? "Edit Profile" : "Create Profile"}
            </button>
        </form>
    );
}

export default Form;
