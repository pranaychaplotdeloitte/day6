// src/components/Random.js
import React from 'react';
import { useState } from 'react';
import axios from 'axios';


function Random() {
    const [user,setUserData] = useState(null)

    const URL = "https://randomuser.me/api/?results=1"
    function fetchApi(){
        axios.get(URL)
        .then(response => setUserData(response.data.results[0]))
        .catch(error => console.log("error in fetching the data",error))
    console.log(user)
    }
   


  return(
    <div> 
        <h2>Random Page</h2>;
        <button onClick={fetchApi}> click here to load resuslts</button>
    </div> 
  ) 
}   

export default Random;
