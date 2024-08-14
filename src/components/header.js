import React from 'react';
import ReactDOM from 'react-dom';
import './header.css';

function Header(){
    return(
       <div class='head'>
       <h2> student profile</h2>
        
        <ul>
          <a href="#"><li>Home</li></a>
          <a href="#"><li>About us</li></a>
          <a href="#"><li>Courses</li></a>
          <a href="#"><li>Services</li></a>
          <a href="#"><li>Contact us</li></a>
        </ul>
        
        

       </div>
    )
  }
  ReactDOM.render(<Header/>,document.getElementById("root"));
  export default Header;