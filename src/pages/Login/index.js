import React from 'react';
import './style.css';

const Login = () => {
    return (
        
            <form id="loginPage">
                <div className="mb-3" className="dataEntryField">
                    <label for="exampleInputEmail1" className="form-label">Agent Name:</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text"></div>
                </div>
                <br></br>
                <div className="mb-3" className="dataEntryField">
                    <label for="exampleInputPassword1" className="form-label">Encryption:</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1" title="To compley with Geneva Convention, please connfirm you possess Clearance Level 7 access.">CLEARANCE LEVEL 7</label>        
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        
    );
}

export default Login;
