import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Login = ({ setUser }) => {

    // declare state
    const [agentName, setAgentName] = useState('');
    const redirectHome = useNavigate();

    // create handles for for login form
    const changeAgentName = e => {
        setAgentName(e.target.value)

    }

    const submitAgentName = e => {
        e.preventDefault()
        setUser(agentName)
        // Once logged in, redirect back to homepage
        redirectHome('/')
    }

    // console.log('props', setUserName)

    return (
        <div className="loginPage" id="bgDiv">

            <form className="loginPage" onSubmit={submitAgentName} action='/home'>
                <div className="mb-3" className="dataEntryField">
                    <label htmlFor="updateInputName1" className="form-label">Agent Name:</label>
                    <input
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
                <div className="mb-3" className="dataEntryField">
                    <label htmlFor="updateInputPassword1" className="form-label">Encryption:</label>
                    <input type="password" className="form-control" id="updateInputPassword1" />
                </div>
                <div className="mb-3 form-check">

                    {/* Added a title feature to show message when hovering over "CLEARANCE LEVEL 7"...just another little easter egg */}
                    <br></br>
                    <input type="checkbox" className="form-check-input" id="updateClearance" />
                    
                    <label className="form-check-label" htmlFor="updateClearance" title="To comply with the Sokovia Accords, confirm you'r Clearance Level 7.">CLEARANCE LEVEL 7</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Login;
