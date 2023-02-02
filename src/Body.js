import React from "react";
import Img from "./img"

const Body = ({discover, date, url, title, copyright, explanation}) => {
    return <div>
        <div>
        <a href = {discover}><b>Discover the cosmos!</b></a>
        </div>
        <p>
        Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.
        </p>
        <p>
        <b>{date}</b>
        </p>
        <Img url={url} title={title}/>
        <h2>
            {title}
        </h2>
        <h2>
        Illustration Credit & Copyright:{copyright}
        </h2>
        <p>
        <b>Explanation:</b>
        {explanation}
        </p>
    </div>
}

export default Body;