import React,{useState,useEffect} from 'react'
import BookCard from '../books/BookCard'
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';


// import required modules
import { Navigation, Pagination } from "swiper/modules";


const Recommended = () => {
   
  const {data: books = [] } = useFetchAllBooksQuery();

  return (
    <div className='py-16'>
    <h2 className='text-3xl font-semibold mb-6 ml-8'>Recommended books for you </h2>
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
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1180:{
            slidesPerView: 3,
            spaceBetween: 50,
          }
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        {
          books.length > 0 &&
          books.slice(15,23).map((book, index) => (
            <SwiperSlide key={index}>
            <BookCard book={book} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}

export default Recommended
