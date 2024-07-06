import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styled";
//import { remover } from "../../redux/listaContatosSlice"
import { Contato } from "../Contato"
import AdicionarContato from "../AdicionarContato";

function Contatos() {
  const [estaEditando, setEstaEditando] = useState(false);
  const [adicionarContatoForm, setAdicionarContatoForm] = useState(false);
  const listaDeContatos = useSelector((state) => state.listaContatos);

  const dispatch = useDispatch();
  function abreContatoForm() {
    setAdicionarContatoForm(
      (setAdicionarContatoForm) => !setAdicionarContatoForm
    );
  }
  
  return (
    <S.Div>
      <div>
        <h1>Lista de contatos:</h1>
        <S.Button onClick={abreContatoForm}>
          {!adicionarContatoForm ? "Adicionar" : "Fechar"}
        </S.Button>
        {adicionarContatoForm && <AdicionarContato />}
      </div>
      <S.Ul>
        {listaDeContatos.map((c) => (
          <S.Li key={c.id}>
            <Contato
              nome={c.nomeCompleto}
              email={c.email}
              telefone={c.telefone}
              id={c.id}
            />
          </S.Li>
        ))}
      </S.Ul>
    </S.Div>
  );
}

export default Contatos;



   