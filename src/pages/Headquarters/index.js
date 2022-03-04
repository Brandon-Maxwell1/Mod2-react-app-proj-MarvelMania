import { createContext, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import './style.css';

const Headquarters = () => {
  const userName = useContext(UserContext)
  return (


    <div id="grid-container">
      <br></br>
      <div id="mainDivImage"></div>
      <br></br>
      {/* Embedded YouTube videos for user experience on page */}
      <div id="minorFlex-container">
        <div id="minorDiv1"><iframe width="400" height="200" src="https://www.youtube.com/embed/KM3Yx-5Ymiw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
        <div id="minorDiv2"><iframe width="400" height="200" src="https://www.youtube.com/embed/aWzlQ2N6qqg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
        <div id="minorDiv3"><iframe width="400" height="200" src="https://www.youtube.com/embed/fd5Tk7Ob1IE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
      </div>
      <div>

      </div>

    </div>


  );
}

export default Headquarters;



