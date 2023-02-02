import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=WDVLfQss0FOfcv6WelZtNLXR1qEQv5Hv8INlW7Bh')
      .then(function (response) {
        const data = response.data
        console.log(data)
        setData({
          copyright: data.copyright,
          title: data.title,
          date: data.date,
          explanation: data.explanation,
          url: data.url,
        });
      })
  }, [])
  const { copyright, date, explanation, title, url } = data;
  return (
    <div className="App">
      <Header head="Astronomy Picture of the Day" />
      <Body discover = "https://apod.nasa.gov/apod/archivepix.html" copyright = {copyright} title = {title} date = {date} explanation = {explanation} url = {url}/>
      <Footer foot="https://www.nasa.gov/" />
    </div>
  );
}

export default App;