import React from 'react'


const Image = (props) => {
    return (
        <div className = "image1">
           <img className ="image" src = {props.imgUrl} alt = "coffee"/> 
        </div>
    );
}

export default Image;
