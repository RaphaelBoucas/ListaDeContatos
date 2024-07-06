import { createSlice } from "@reduxjs/toolkit";
import contato from "../Data/mockData.json";

const listaDeContatos = contato.contatos;

const listaContatosSlice = createSlice({
  name: "listaContatos",
  initialState: listaDeContatos,
  reducers: {
    remover: (state, action) => {
      return state.filter((contato) => contato.id !== action.payload.id);
     
     },
    editar: (state, action) => {
      const index = state.findIndex(contato => contato.id === action.payload.id);
      if (index >= 0) {
        state[index] = {
          ...state[index],
          ...action.payload,
        };
    } },
    adicionar: (state, action) => {
      state.push(action.payload)
    }

  },
});


export default listaContatosSlice.reducer;

export const { remover, editar, adicionar } = listaContatosSlice.actions
