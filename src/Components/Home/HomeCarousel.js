import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const HomeCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };
    return (
        <div>
              <Carousel className='h-2' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img style={{height:"500px"}}
          className="d-block w-100"
          src="https://i.ibb.co/hX71HBS/lily-banse-YHSwy6uqvk-unsplash.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Food Options</h3>
          <p>We cater different types of malaysian food at a very low rate</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"500px"}}
          className="d-block w-100"
          src="https://i.ibb.co/5YPYHXD/brooke-lark-w-Mzx2n-Bdeng-unsplash.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Open Hours</h3>
          <p>We Are Open Every Sunday to Thursday from 10am-5pm</p>
        </Carousel.Caption> 
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"500px"}}
          className="d-block w-100"
          src="https://i.ibb.co/CHgVKMK/patrick-fore-Nn-TQBk-Bk-U9g-unsplash.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Location</h3>
          <p>
          UTM 80990 Sekudai, Johor
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default HomeCarousel;