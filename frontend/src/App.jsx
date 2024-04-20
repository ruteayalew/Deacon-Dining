import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'

function App() {
  
axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://wake-purity-test-api.vercel.app/register', {name, email, password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }
  return (
    
    <div className="App"> 

      
      <div className="topnav">
      <a className="active" href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      </div> 

      <div className="header"> Where's The Mac?</div>
      <div className="subheader"> Deacon Dining Search Engine</div>

      <div className="search-bar-container">
          <input type="text" placeholder="Search..." />
      </div>
      

    

    </div>



  );
}

export default App;
