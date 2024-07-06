import { configureStore } from "@reduxjs/toolkit";
import listaContatosSlice from "./listaContatosSlice";

const store = configureStore({
  reducer: {
    
    listaContatos: listaContatosSlice
  },
});

export default store;