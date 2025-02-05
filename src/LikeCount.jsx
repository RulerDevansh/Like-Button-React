import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as i from '@fortawesome/free-solid-svg-icons';
// Added fontawsome by npm
import "./Like.css";
import { useState } from 'react';

export default function LikeCount ({fun}){
    return (
        <div className="likecount">
            <button onClick={fun} style={{width:"50%",}}>Like!!</button>
            <FontAwesomeIcon className="zoom-in-out-element" icon={i.faHeart} />
        </div>
    );
}