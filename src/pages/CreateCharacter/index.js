import React from 'react';
import NoImage from '../../images/No_Image.PNG';

const CreateCharacter = ({ createdProfile }) => {

    

    return (
        <div>
            <form>
                <div className="mb-3" className="dataEntryField">
                    <label htmlFor="updateInputName1" className="form-label">Profile Name</label>
                    <input
                        placeholder='Enter Profile Name...'
                        type="text"
                        className="form-control"
                        id="updateInputName1"
                        aria-describedby="nameHelp"
                        value=""
                        onChange=""
                    />
                    <div id="nameHelp" className="form-text"></div>
                </div>
                <br></br>
                <div className="mb-3" className="dataEntryField">
                    <label htmlFor="updateInputPassword1" className="form-label">Description:</label>
                    <input
                        placeholder='Enter Origin Story...'
                        type="password"
                        className="form-control"
                        id="updateInputPassword1" />
                </div>
                <br></br>
                <div>
                    <label htmlFor="formFileLg" className="form-label">Upload Your Hero / Villain Image</label>
                    <input className="form-control form-control-md" id="formFilemd" type="file" />
                </div>

                <br></br>
                <button type="submit">Create</button>
            </form>

            <div id="profile-container">
                {
                    createdProfile &&
                    createdProfile.map((newProfile) => (
                        <div>
                            <div className="profile-card">
                                <h6>ID #{newProfile.id+2001000}
                                </h6>                                
                                <img src={newProfile.thumbnailpath ? newProfile.thumbnailpath : NoImage} className="card-img"
                                    alt="Character Image" />

                                <div className="card-body">
                                    <h5 className="card-title">{newProfile.name}</h5>
                                    <p className="card-text">{newProfile.description}</p>           
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
