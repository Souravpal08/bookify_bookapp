import { createSlice } from "@reduxjs/toolkit";
import  Swal  from "sweetalert2";


const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingBook = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (!existingBook) {
        state.cartItems.push(action.payload);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Book added to cart",
          showConfirmButton: false,
          iconColor:"#F05A7E",
          timer: 1500,
        });

      } else {
        Swal.fire({
          position: "center",
          icon: "info",
          title: "Book is already in cart",
          text:"You can't be able to revert this!",
          showCancelButton: true,
          cancelButtonColor:"#FF4545",
          confirmButtonColor:"#024CAA",
          confirmButtonText:"OK",
          timer: 2000,
        });

      }
    },
   removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload);
    },
    

    clearCart(state) {
      state.cartItems = [];
    }

  },
});

//export actions
export const { addToCart,removeFromCart,clearCart } = cartSlice.actions;

export default cartSlice.reducer;