import React, { useEffect, useState } from 'react';
import axios from "axios";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';





function SlideShow(args) {
    const [data, setData] = useState({})
    const [randomDate, setRandomDate] = useState("")
    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=WDVLfQss0FOfcv6WelZtNLXR1qEQv5Hv8INlW7Bh&date=2000-06-20")
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

      const items = [
        {
          src: {},
          altText: 'Slide 1',
          caption: 'Slide 1',
          key: 1,
        },
        {
          src: 'https://picsum.photos/id/456/1200/400',
          altText: 'Slide 2',
          caption: 'Slide 2',
          key: 2,
        },
        {
          src: 'https://picsum.photos/id/678/1200/400',
          altText: 'Slide 3',
          caption: 'Slide 3',
          key: 3,
        },
      ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default SlideShow;