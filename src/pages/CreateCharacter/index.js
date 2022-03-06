import React from 'react';
import NoImage from '../../images/No_Image.PNG';
import './style.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Form from '../../components/Form';


const CreateCharacter = () => {

    // const refreshPage = useNavigate();

    const [createdProfile, setCreatedProfile] = useState([]);
    const [editProfile, setEditProfile] = useState(false);
    const [profileEdited, setProfileEdited] = useState({});

    useEffect(() => {
        GetCreatedProfile();
    }, [])    

    const GetCreatedProfile = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/v1/allprofiles")
            setCreatedProfile(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const DeleteProfile = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/api/v1/profile/${id}`)
            GetCreatedProfile();
        } catch (error) {
            console.log(error)
        }
    }

    const handleEdit = (newProfile) => {
        setEditProfile(true)
        setProfileEdited(newProfile)
    }


    return (
        <div>
            <br></br>
            <Form 
            GetCreatedProfile={GetCreatedProfile} 
            editProfile={editProfile}
            profileEdited={profileEdited}
            />

            <div id="profile-container">
                {
                    createdProfile &&
                    createdProfile.map((newProfile) => (
                        <div>
                            <div className="profile-card">
                                <h6>ID #{newProfile.id + 2001000}
                                </h6>
                                <img src={newProfile.thumbnailpath ? newProfile.thumbnailpath : NoImage} className="card-img"
                                    alt="Character Image" />

                                <div className="card-body" id="cardBodyDiv">
                                    <h5 className="card-title">{newProfile.name}</h5>
                                    <div>
                                        <p className="card-text">{newProfile.description}</p>
                                        <br></br>
                                        <br></br>
                                        <div id="iconDiv">
                                            <button className='buttonCSS'>
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQewIayhIZTUcfaXzG_cV0vPncxMbPYWhQrVpOCiwodpvObUmnLQP-4WgkucCRSgKRcVJU&usqp=CAU"
                                                    width={35}
                                                    height={40}
                                                    onClick={() => handleEdit(newProfile)}
                                                />
                                            </button>

                                            <button className='buttonCSS'>
                                                <img src="https://png.pngtree.com/png-vector/20190726/ourmid/pngtree-recycle-bin-icon-for-your-project-png-image_1600015.jpg"
                                                    width={35}
                                                    height={40}
                                                    onClick={() => DeleteProfile(newProfile.id)}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
}

export default CreateCharacter;
