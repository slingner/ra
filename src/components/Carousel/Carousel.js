import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MediaCard from '../../components/Card/Card';
import { Link } from 'react-router-dom';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function CustomCarousel() {
  return (
    <div style={{ padding: '20px 100px 0 100px' }}>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={false}
        keyBoardControl={true}
        customTransition='all .5'
        transitionDuration={500}
        containerClass='carousel-container'
        // removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item-padding-40-px'
      >
        <div>
          <Link
            style={{ color: 'black', textDecoration: 'none' }}
            to='/addition'
          >
            <MediaCard
              categoryTitle='ADDITION'
              imageSource={
                'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2175&q=80'
              }
            />
          </Link>
        </div>
        <div>
          <MediaCard
            categoryTitle='SUBTRACTION'
            imageSource={
              'https://images.unsplash.com/photo-1560785496-284e257f0bf7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
            }
          />
        </div>
        <div>
          <MediaCard
            categoryTitle='MULTIPLICATION'
            //   imageSource={
            //     'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80'
            //   }
          />
        </div>
        <div>
          <MediaCard
            categoryTitle='DIVISION'
            //   imageSource={
            //     'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
            //   }
          />
        </div>
        <div>
          <MediaCard
            categoryTitle='FRACTIONS'
            //   imageSource={
            //     'https://images.unsplash.com/photo-1446329360995-b4642a139973?ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80'
            //   }
          />
        </div>
        <div>
          <MediaCard
            categoryTitle='FUN MATH FACTS'
            //   imageSource={
            //     'https://images.unsplash.com/photo-1509869175650-a1d97972541a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
            //   }
          />
        </div>
      </Carousel>
    </div>
  );
}
