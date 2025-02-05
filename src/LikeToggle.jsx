import "./LikeToggle.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as s from '@fortawesome/free-solid-svg-icons';
import * as r from '@fortawesome/free-regular-svg-icons';
import { useState } from "react";


export default function LikeToggle () {

    let [isLike,setLike] = useState(false);
    let toggle = ()=>{
        console.log("Like Toggled!!");
        // if (isLike==false) {
        //     setLike(true);
        //     console.log(isLike);
        // }
        // else {
        //     setLike(false);
        //     console.log(isLike);
        // }
        //or 
        setLike(!isLike);
        console.log(isLike);
        
    }
    
    return (
        <div className="LikeToggle">
            <h1>Click on like icon to change it !!</h1>
            {!isLike ?<FontAwesomeIcon className="regular" icon={r.faHeart} onClick={toggle}/>
            :<FontAwesomeIcon className="solid" icon={s.faHeart} onClick={toggle}/>}
        </div>
    );
}