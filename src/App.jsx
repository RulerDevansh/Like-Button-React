import './App.css'
import LikeCount from './LikeCount.jsx'
import LikeToggle from './LikeToggle.jsx';
import { useState } from 'react';



function App() {
  let [count,setcount]=useState(0)
    function update (){
        setcount(++count);
        console.log(count);
    }
  return (
    <>
      <h1>LIKE COUNTER</h1>
      <h2>{count} Likes</h2>
      <LikeCount fun={update}/>
      <hr />
      <h1>LIKE TOGGLE</h1>
      <LikeToggle/> 
    </>
  )
}

export default App
