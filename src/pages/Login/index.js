import { useState } from 'react';
import './style.css';


const Login = () => {

    // declare state
    const [agentName, setAgentName] = useState('');    

    // create handles for for login form
    const updateAgentName = e => {
        setAgentName(e.target.value)
        
    }

    const submitAgentName = e => {
        e.preventDefault()
    }

    console.log('state in login', agentName)

    return (
        <div className="loginPage" id="bgDiv">

            <form className="loginPage" onSubmit={submitAgentName}>
                <div className="mb-3" className="dataEntryField">
                    <label htmlFor="updateInputName1" className="form-label">Agent Name:</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="updateInputName1" 
                    aria-describedby="nameHelp"
                    value={agentName}
                    onChange={updateAgentName}
                     />
                    <div id="nameHelp" className="form-text"></div>
                </div>
                <br></br>
                <div className="mb-3" className="dataEntryField">
                    <label htmlFor="updateInputPassword1" className="form-label">Encryption:</label>
                    <input type="password" className="form-control" id="updateInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="updateClearance" />
                    <label className="form-check-label" htmlFor="updateClearance" title="To comply with the Geneva Convention, please confirm you have Clearance Level 7 access.">CLEARANCE LEVEL 7</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Login;
