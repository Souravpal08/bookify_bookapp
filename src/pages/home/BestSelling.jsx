import React, { useState, useEffect, forwardRef } from "react";
import BookCard from "../books/BookCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { useFetchAllBooksQuery } from "../../redux/features/books/booksApi";

const categories = [
  "Choose a genre",
  "Business",
  "Fiction",
  "Horror",
  "Adventure",
  "Romantic",
  "Thriller",
];

const BestSelling = forwardRef((props, ref) => {

  const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

  const {data: books = [] } = useFetchAllBooksQuery();
//  console.log(books);
  


  const filteredBooks =
    selectedCategory === "Choose a genre"
      ? books
      : books.filter((book) => book.category === selectedCategory.toLowerCase());

  return (
    <div ref={ref} className="py-12">
      <h2 className="text-3xl font-semibold mb-6 px-16 text-red-700">
        Best Sellers
      </h2>
      <div className="mb-8 flex-items-center px-14">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          name="category"
          id="category"
          className="border bg-[#EAEAEAEA] border-gray-400 rounded-md px-4 py-2 focus:outline-none"
        >
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 3, spaceBetween: 50 },
          1180: { slidesPerView: 3, spaceBetween: 50 },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {filteredBooks.length > 0 &&
          filteredBooks.map((book, index) => (
            <SwiperSlide key={index}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
});

export default BestSelling;
