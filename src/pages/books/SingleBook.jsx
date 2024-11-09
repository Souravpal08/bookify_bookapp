import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { getImgUrl } from '../../utils/getImgUrl';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { useFetchBookByIdQuery } from '../../redux/features/books/booksApi';

const SingleBook = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = useFetchBookByIdQuery(id);

    const dispatch = useDispatch();

    // Debugging statements
  //  console.log("Book data:", data);
    
    // Check for the correct structure of `book` data
    const book = data?.data;  // Adjust based on the actual structure of `data`

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    }

    if (isLoading) return <div> Book is Loading...</div>;
    if (isError) return <div>Error loading book info</div>;
    if (!book) return <div>No book data available</div>;  // Additional check if `book` is undefined

    return (
        <div className="max-w-lg shadow-md ml-5 ">
            <h1 className="text-2xl font-bold mb-6">{book.title}</h1>

            <div>
                <img
                    src={getImgUrl(book.coverImage)}
                    alt={book.title}
                    className="mb-8"
                />
            </div>

            <div className="mb-5">
                <p className="text-gray-700 mb-2"><strong>Author:</strong> {book.author || 'admin'}</p>
                <p className="text-gray-700 mb-4">
                    <strong>Published:</strong> {new Date(book.createdAt).toLocaleDateString()}
                </p>
                <p className="text-gray-700 mb-4 capitalize">
                    <strong>Category:</strong> {book.category}
                </p>
                <p className="text-gray-700"><strong>Description:</strong> {book.description}</p> <br /> {/* Description Display */}
                <div>
                <p className="text-gray-700 mb-4"><strong>Old Price:</strong> ${book.oldPrice}</p> {/* Old Price Display */}
                <p className="text-gray-700 mb-4"><strong>Current Price:</strong> ${book.newPrice}</p> {/* New Price Display */}
                </div>

            </div>

            <button onClick={() => handleAddToCart(book)} className="btn-primary  space-x-1 flex items-center gap-1 ">
                <FiShoppingCart />
                <span>Add to Cart</span>
            </button>
        </div>
    );
};

export default SingleBook;
