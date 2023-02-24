import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";
import Slide from "./carousel";
import Search from "./search";

function App() {
  const [data, setData] = useState({})
  const [searchDate, setSearchDate] = useState("")
  const changeHandler = (e) => {
    setSearchDate(e);
  }

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=WDVLfQss0FOfcv6WelZtNLXR1qEQv5Hv8INlW7Bh&date='+searchDate)
      .then(function (response) {
        const data = response.data
        console.log(data)
        setData({
          copyright: data.copyright,
          title: data.title,
          date: data.date,
          explanation: data.explanation,
          url: data.url,
          media_type : data.media_type,
        });
      })
  }, [searchDate])
  const { copyright, date, explanation, title, url, media_type } = data;
  return (
    <div className="App">
      <Header head="Astronomy Picture of the Day"/>
      <Search searchDate = {searchDate} changeHandler = {changeHandler}/>
      <Body discover = "https://apod.nasa.gov/apod/archivepix.html" copyright = {copyright} title = {title} date = {date} explanation = {explanation} url = {url} media_type={media_type}/>
      <Footer foot="https://www.nasa.gov/"/>
    </div>
  );
}

export default App;