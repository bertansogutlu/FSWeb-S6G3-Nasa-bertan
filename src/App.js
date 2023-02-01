import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Header";

function App() {
  const [data, setData] = useState({})
  useEffect (() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=WDVLfQss0FOfcv6WelZtNLXR1qEQv5Hv8INlW7Bh')
  .then(function (response) {
    setData({
      copyright: response.data.copyright,
      title: response.data.title,
      date: response.data.date,
      explanation: response.data.explanation,
      url: response.data.url,
    });
  })
  },[])
  const { copyright, date, explanation, title, url } = data;
  return (
    <div className="App">
      <p>
        NASA uygulamasını yapmak için README.md dosyasıdaki talimatları takip edin
		İyi eğlenceler! <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Header/>
    </div>
  );
}

export default App;