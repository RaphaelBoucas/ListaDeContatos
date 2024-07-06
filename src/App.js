import React from "react";
import GlobalStyle from "./globalStyle"
import Contatos from "./components/ListaContato";
import  AdicionarContato from "./components/AdicionarContato";
//import Contato from "./components/Contato";

function App() {
  return (
    <>
      <GlobalStyle />
      <Contatos />
    </>
  );
}

export default App;
