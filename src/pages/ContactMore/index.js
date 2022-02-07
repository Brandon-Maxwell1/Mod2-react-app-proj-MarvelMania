import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import './style.css'

const ContactMore = () => {
    const userName = useContext(UserContext)
    // Used bootstrap for layout
    // All links are functioning and take user to fun experiences
    return (
        <div id="contact-container">
            <div id="mainContact-container">
                <div id="mainContactImage1"></div>
            </div>
            <div className="card-group">
                <div className="card">
                    <div>
                        <a href="https://www.dallascomicshow.com/tag/marvel-comics/">
                            <img src="https://www.kindpng.com/picc/m/230-2303322_transparent-spiderman-face-png-spiderman-logo-clipart-png.png" alt='Spider-Man' className="card-img-top" /></a>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Local Events</h5>
                        <p className="card-text">For information on your friendly local Spid-Events, click icon above.</p>
                    </div>

                </div>

                <div className="card">
                    <div>
                        <a href="https://www.instagram.com/marvelstudios/?hl=en">
                            <img src="https://mmv2api.s3.us-east-2.amazonaws.com/products/images/Item88625.jpg.jpg" alt='The Watcher' className="card-img-top" /></a>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Social Med</h5>
                        <p className="card-text">To follow us on social media, click above... But remember, we're always The Watcher'ing you</p>
                    </div>

                </div>

                <div className="card">
                    <div>
                        <a href="https://thatsthefinger.com/">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX2rmuGSU5YTzhK3swxmMShlBo-JuSTd15SgR6gci47Js8D8uhoMwd0-uom4XsrGYIpTg&usqp=CAU" alt='SHIELD' className="card-img-top" /></a>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Contact Us</h5>
                        <p className="card-text">We'll be in touch with you.  Click above with caution.</p>
                    </div>

                </div>

                <div className="card">
                    <div>
                        <a href="https://www.marvel.com/help/category/17">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKoD3sr5nx2t-xW8CmCHly1lRO1GJf5V6D2zfJq_Y9e8whXKoQU5KNg_nKc-YQUq4FOUE&usqp=CAU" alt='SHIELD' className="card-img-top" /></a>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Help Desk</h5>
                        <p className="card-text">Do you need assistance with an Avenger's Level Event? <br></br><bold>CLICK ABOVE!!!</bold>.</p>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default ContactMore;
