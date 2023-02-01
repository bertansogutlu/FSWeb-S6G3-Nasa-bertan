import React from "react";

const Body = ({date, url, title}) => {
    return <div>
        <p>
            Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.
        </p>
        <p>
            {date}
        </p>
        <img src = {url}>
        </img>
        <h2>
            {title}
        </h2>
    </div>
}

export default Body;