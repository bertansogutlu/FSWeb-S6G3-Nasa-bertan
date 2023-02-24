import React from "react";

const Img = ({url, title, media_type}) => {
    console.log(media_type)
    return <img src = {url} alt = {title}/>
    if (media_type == "image") {
        return <img src = {url} alt = {title}/>
    }
    if (media_type == "video") {
        return <iframe width="420" height="315" src={url}/>
        }
}

export default Img;