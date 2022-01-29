import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

const ContactMore = () => {
    const userName = useContext(UserContext)
    return (
        <div>
            Contact Us & More
        </div>
    );
}

export default ContactMore;
