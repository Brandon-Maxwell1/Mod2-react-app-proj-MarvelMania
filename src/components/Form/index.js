import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Form = ({ GetCreatedProfile, editProfile, profileEdited }) => {

    console.log('profileEdited', profileEdited)

    const [profileName, setProfileName] = useState('');
    const [profileDescription, setProfileDescription] = useState('');
    const [profileImage, setProfileImage] = useState('');


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
                const response = await axios.put(`http://localhost:8080/api/v1/profile/${profileEdited.id}`, profileNew)
                GetCreatedProfile()
                refreshPage('/create')
                window.alert(`Successfully Update ${profileEdited.name} Profile`)
            } else {
                const response = await axios.post("http://localhost:8080/api/v1/addprofile", profileNew)

                if (response.status === 200) {
                    setProfileName('')
                    setProfileDescription('')
                    setProfileImage('')
                    window.alert(`Successfully Added ${profileNew.name}`)
                }
            }
            GetCreatedProfile()
            refreshPage('/create')
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <form onSubmit={handleSubmit} >
            <div className="mb-3" className="dataEntryField">
                <label htmlFor="updateInputName1" className="form-label">Profile Name:</label>
                <input
                    type="text"
                    className="form-control"
                    id="updateInputName1"
                    aria-describedby="nameHelp"
                    placeholder={editProfile ? profileEdited.name : 'Enter Profile Name...'}
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
                    placeholder={editProfile ? profileEdited.description : 'Enter Origin Story...'}
                    value={profileDescription}
                    onChange={e => setProfileDescription(e.target.value)}
                >
                </textarea>
            </div>

            <div>
                <label htmlFor="profileImage" className="form-label">Upload Your Character Image:</label>
                <input
                    className="form-control form-control-md"
                    id="formFilemd"
                    type="text"
                    placeholder="Insert URL Here..."
                    value={profileImage}
                    onChange={e => setProfileImage(e.target.value)}
                />
            </div>

            <br></br>
            <div>
                <button type="submit">
                    {editProfile ? "Edit Profile" : "Create Profile"}
                </button>
                <button id="cancelEdit" type="submit">
                    {editProfile ? "Cancel Edit" : ""}
                </button>
            </div>

        </form>
    );
}

export default Form;
