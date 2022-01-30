import { createContext, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import './style.css';

const Headquarters = () => {
    const userName = useContext(UserContext)
    return (
        <div>
            {/* {
         !userName ? "Welcome Future Avenger" : "Suit up {userName}"
         }   */}
         <div id="grid-container">
        <div id="mainDivImage"></div>
         <div id="minorDiv1"><iframe width="400" height="200" src="https://www.youtube.com/embed/x7Krla_UxRg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
         <div id="minorDiv2"><iframe width="400" height="200" src="https://www.youtube.com/embed/Rt_UqUm38BI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
         <div id="minorDiv3"><iframe width="400" height="200" src="https://www.youtube.com/embed/TfAC_hT19O0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
         </div>
         
        </div>
    );
}

export default Headquarters;


{/* <div class="container">
  <div class="row">
    <div class="col">
      1 of 1
    </div>    
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col">
      2 of 3
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
</div> */}