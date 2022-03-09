import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { send } from 'emailjs-com';
import { init } from '@emailjs/browser';
init("0b2V77y6Al_RlIYmQ");

const NewUserLogin = () => {

    const [agentName, setAgentName] = useState('');
    const [agentPassword, setAgentPassword] = useState('');
    const [agentEmail, setAgentEmail] = useState('');
    const [agentID, setAgentID] = useState('');
    const redirectToLogin = useNavigate();
    const [toSend, setToSend] = useState({
        to_name: '',
        to_password: '',
        to_id: '',
        to_email: '',
    })

    console.log(agentName, agentPassword, agentEmail);

    const hiddenID = async (id) => {
        try {
            const response = await axios.get(`https://marvel-backend-application.herokuapp.com/api/v1/profile/${id}`)
            setAgentID();
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const newUser = {
                username: agentName,
                email: agentEmail,
                id: agentID
            }
            const response = await axios.post("https://marvel-backend-application.herokuapp.com/api/v1/adduser", newUser)

            send(
                'service_a0t5uk5',
                'template_cozql2m',
                toSend,
                '0b2V77y6Al_RlIYmQ'
            )
                .then((resp) => {
                    console.log('SUCCESS', resp.status, resp.text)
                    window.alert(`Successfully Added Agent ${newUser.username}`)
                })

        } catch (error) {
            console.log(error)
        }
        redirectToLogin('/login')
    }


    // const handleChange = (e) => {
    //     setToSend({ ...toSend, [e.target.name]: e.target.value });
    //   };

    return (

        <div>

            <form className="loginPage" action='/login' onSubmit={handleSubmit} >
                <div className="mb-3 dataEntryField">
                    <label htmlFor="updateInputName1" className="form-label">Agent Name:</label>
                    <input
                        placeholder='Create New Agent...'
                        type="text"
                        className="form-control"
                        id="updateInputName1"
                        aria-describedby="nameHelp"
                        value={toSend.to_name.agentName}
                        onChange={e => setAgentName(e.target.value)}
                    />
                    <div id="nameHelp" className="form-text"></div>
                </div>
                <br></br>
                <div className="mb-3 dataEntryField">
                    <label htmlFor="updateInputPassword1" className="form-label">Encryption:</label>
                    <input
                        placeholder='Create Encryption Key...'
                        type="password"
                        className="form-control"
                        id="updateInputPassword3"
                        value={toSend.to_password.agentPassword}
                        onChange={e => setAgentPassword(e.target.value)}
                    />
                </div>
                <br></br>
                <div className="mb-3 dataEntryField">
                    <label htmlFor="updateInputPassword1" className="form-label">Secure Email:</label>
                    <input
                        placeholder='Enter Email...'
                        type="email"
                        className="form-control"
                        id="updateInputPassword1"
                        value={toSend.to_email.agentEmail}
                        onChange={e => setAgentEmail(e.target.value)}
                    />
                </div>
                <div id="invisibleID">{toSend.to_id.agentID}</div>
                <br></br>
                <button type="submit" className="btn btn-primary">Add Agent</button>

            </form>
        </div>
    );
}

export default NewUserLogin;
