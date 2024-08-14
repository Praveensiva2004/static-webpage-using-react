import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components/header.js';
import Footer from  './components/footer.js';
import Content from './components/content.js';



function Solution(){
  return(
    <div class="box">
      
      <Header/>
      <Content/>
      <Footer/>
      


    </div>
  )
}

ReactDOM.render(<Solution/>,document.getElementById("root"));