import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';


import news1 from "../../assets/news/news-1.png";
import news2 from "../../assets/news/news-2.png";
import news3 from "../../assets/news/news-3.png";
import news4 from "../../assets/news/news-4.png";
import news5 from "../../assets/news/news-2.png";
import news6 from "../../assets/news/news-6.jpeg";



const news = [
    {
        "id": 1,
        "title": "Global Climate Summit Calls for Urgent Action",
        "description": "World leaders gather at the Global Climate Summit to discuss urgent strategies to combat climate change, focusing on reducing carbon emissions and fostering renewable energy solutions.",
        "image": news1
    },
    {
        "id": 2,
        "title": "Breakthrough in AI Technology Announced",
        "description": "A major breakthrough in artificial intelligence has been announced by researchers, with new advancements promising to revolutionize industries from healthcare to finance.",
        "image": news2
    },
    {
        "id": 3,
        "title": "New Space Mission Aims to Explore Distant Galaxies",
        "description": "NASA has unveiled plans for a new space mission that will aim to explore distant galaxies, with hopes of uncovering insights into the origins of the universe.",
        "image": news3
    },
    {
        "id": 4,
        "title": "Stock Markets Reach Record Highs Amid Economic Recovery",
        "description": "Global stock markets have reached record highs as signs of economic recovery continue to emerge following the challenges posed by the global pandemic.",
        "image": news4
    },
    {
        "id": 5,
        "title": "Innovative New Smartphone Released by Leading Tech Company",
        "description": "A leading tech company has released its latest smartphone model, featuring cutting-edge technology, improved battery life, and a sleek new design.",
        "image": news5
    },
    {
        "id": 6,
        "title": "Scientists Discover Potential Cure for Rare Disease",
        "description": "In a groundbreaking study, scientists have developed a potential cure for a rare genetic disease, offering hope to thousands of affected families.",
        "image": news6
    },
]

const TrendingNews = () => {
  return (
    <div className='py-16'>
      <h2 className='text-3xl font-semibold ml-8'>Trending news</h2>
      
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
       {
        news.map((item,index)=>(
            <SwiperSlide>
                <div className='flex flex-col sm:flex-row sm:justify-between items-center gap-10 '>
                    <div className='py-4'>
                        <Link to= '/'>
                              <h3 className='text-lg font-medium hover:text-primary mb-4 py-2'>{item.title}</h3>
                        </Link>
                        <div className='w-10 h-[4px] bg-primary mb-5 rounded-md'></div>
                        <p className='text-gray-700 text-sm'>{item.description}</p>
                    </div>
                    <div className='flex-shrink-0'>
                        <img src={item.image} alt="" className='w-full h-40 object-cover'/>
                    </div>
                </div>
            </SwiperSlide>

        ))
       }
      </Swiper>

    </div>
  )
}

export default TrendingNews
