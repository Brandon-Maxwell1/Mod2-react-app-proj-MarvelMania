import React from 'react';

const NewUserLogin = () => {
    return (
        
        <div>

            <form className="loginPage" action='/login'>
                <div className="mb-3" className="dataEntryField">
                    <label htmlFor="updateInputName1" className="form-label">Agent Name:</label>
                    <input
                        placeholder='Create New Agent...'
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
                    <label htmlFor="updateInputPassword1" className="form-label">Encryption:</label>
                    <input
                        placeholder='Create Encryption Key...'
                        type="password"
                        className="form-control"
                        id="updateInputPassword3" />
                </div>
                <br></br>
                <div className="mb-3" className="dataEntryField">
                    <label htmlFor="updateInputPassword1" className="form-label">Secure Email:</label>
                    <input
                        placeholder='Enter Email...'
                        type="password"
                        className="form-control"
                        id="updateInputPassword1" />
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary">Create</button>

            </form>
        </div>
    );
}

export default NewUserLogin;
