import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import React, { useState } from 'react';
import axios from 'axios';
const App = () => {
  const [quote,setQuote]=useState("Demo Quote")
const handleQuote = async()=>{
const res= await axios.get("https://api.quotable.io/random")
setQuote(res.data.content);
};
  return (
    <>
    <div className='center-container'>
     <div className=" text-center mt-5 body">
  <div className="card-body">
    <h5 className="card-title mb-4">Quote Of The Day</h5>
    <p className="card-text">"{quote}"</p>
  </div>
  <div className="card-footer">
  
  <button className='button btn btn-primary'type="button" onClick={handleQuote}>Get Quote</button>
  </div>
</div>
</div>
    </>
  );
}

export default App;
