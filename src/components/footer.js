import React from 'react';
import ReactDOM from 'react-dom';
import './footer.css';

function Footer(){
  return(
    <div class='head1'>
    <h2> student profile</h2>
     
     <ul>
       <a href="#"><li>Home</li></a>
       <a href="#"><li>About us</li></a>
       <a href="#"><li>courses</li></a>
       <a href="#"><li>Services</li></a>
       <a href="#"><li>Contact us</li></a>
     </ul>
     
     

    </div>
 )

  }
  ReactDOM.render(<Footer/>,document.getElementById("root"));
  export default Footer;