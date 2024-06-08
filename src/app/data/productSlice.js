import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  modalIsOpen: false,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    openModal: (state) => {
      state.modalIsOpen = true;
    },
    closeModal: (state) => {
      state.modalIsOpen = false;
    },
  },
});

export const { addProduct, openModal, closeModal } = productSlice.actions;
export default productSlice.reducer;
