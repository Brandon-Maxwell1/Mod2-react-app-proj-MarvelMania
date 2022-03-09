import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.css';

const Login = ({ setUser }) => {

    // declare state
    const [agentName, setAgentName] = useState('');
    const redirectHome = useNavigate();

    // create handles for for login form
    const changeAgentName = e => {
        setAgentName(e.target.value)

    }

    const submitAgentName = async (e) => {
        e.preventDefault()

        const verifyUser = {
            username: agentName
        }

        try {
            const response = await axios.post(`https://marvel-backend-application.herokuapp.com/api/v1/login`, verifyUser)

            console.log(response)

            if (response.status !== 200) {
                // Once logged in, redirect back to homepage

            } else {
                setUser(agentName)
                redirectHome('/')
            }

        } catch (error) {
            console.log(error)
            window.alert("Not a Valid Agent")

        }

    }



    return (
        <div className="loginPage" id="bgDiv">

            <form className="loginPage" onSubmit={submitAgentName} >
                <div className="mb-3 dataEntryField">
                    <label htmlFor="updateInputName1" className="form-label">Agent ID#:</label>
                    <input
                        placeholder='Enter Agent Name...'
                        type="text"
                        className="form-control"
                        id="updateInputName1"
                        aria-describedby="nameHelp"
                        value={agentName}
                        onChange={changeAgentName}
                    />
                    <div id="nameHelp" className="form-text"></div>
                </div>
                <br></br>
                <div className="mb-3 dataEntryField">
                    <label htmlFor="updateInputPassword1" className="form-label">Encryption Key:</label>
                    <input
                        placeholder='Enter Password...'
                        type="password"
                        className="form-control"
                        id="updateInputPassword1" />
                </div>
                <div className="mb-3 form-check">

                    {/* Added a title feature to show message when hovering over "CLEARANCE LEVEL 7"...just another little easter egg */}
                    <br></br>
                    <input type="checkbox" className="form-check-input" id="updateClearance" />

                    <label className="form-check-label" htmlFor="updateClearance" title="In compliance with the Sokovia Accords, confirm you're Clearance Level 7.">CLEARANCE LEVEL 7</label>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <br></br>
                <Link to="/newUser">
                    <button type="submit" className="btn btn-primary">New Agent</button>
                </Link>
            </form>
        </div>
    );
}

export default Login;
