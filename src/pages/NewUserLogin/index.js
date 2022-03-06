import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewUserLogin = () => {

    const [agentName, setAgentName] = useState('');
    const [agentPassword, setAgentPassword] = useState('');
    const [agentEmail, setAgentEmail] = useState('');
    const redirectToLogin = useNavigate();

    console.log(agentName, agentPassword, agentEmail);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const newUser= {
                username: agentName,
                email: agentEmail
            }
            const response = await axios.post("http://localhost:8080/api/v1/adduser", newUser)
            
        } catch (error) {
            console.log(error)
        }
        redirectToLogin('/login')
    }

    
    return (

        <div>

            <form className="loginPage" action='/login' onSubmit={handleSubmit} action='/login'>
                <div className="mb-3" className="dataEntryField">
                    <label htmlFor="updateInputName1" className="form-label">Agent Name:</label>
                    <input
                        placeholder='Create New Agent...'
                        type="text"
                        className="form-control"
                        id="updateInputName1"
                        aria-describedby="nameHelp"
                        onChange={e => setAgentName(e.target.value)}
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
                        id="updateInputPassword3"
                        onChange={e => setAgentPassword(e.target.value)}
                    />
                </div>
                <br></br>
                <div className="mb-3" className="dataEntryField">
                    <label htmlFor="updateInputPassword1" className="form-label">Secure Email:</label>
                    <input
                        placeholder='Enter Email...'
                        type="email"
                        className="form-control"
                        id="updateInputPassword1"
                        onChange={e => setAgentEmail(e.target.value)}
                    />
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary">Create</button>

            </form>
        </div>
    );
}

export default NewUserLogin;
