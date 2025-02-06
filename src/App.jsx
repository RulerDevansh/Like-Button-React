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
  console.log("App Component Rendered");
  
  // The above way is not that good as the full app re-renders when count is updated (so the right approach will be to define count inside likecount componenet)     
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
