import React from "react";
import * as S from "./styled";
import { useState } from "react";
import { useSelector } from "react-redux";
import { adicionar } from "../../redux/listaContatosSlice";
import { useDispatch } from "react-redux";

  export default function AdicionarContato({ id, nome, email, telefone }) {
  const dispatch = useDispatch();
   const listaDeContatos = useSelector((state) => state.listaContatos);

  const [estaEditando, setEstaEditando] = useState(true);
  const [campoNome, setCampoNome] = useState(nome);
  const [campoEmail, setCampoEmail] = useState(email);
  const [campoTelefone, setCampoTelefone] = useState(telefone);

  function editaAdicionar() {
    dispatch(adicionar({
        id: String(listaDeContatos.length + 1),
        nomeCompleto: campoNome,
        email: campoEmail,
        telefone: campoTelefone
      }));  
          setCampoNome("");
          setCampoEmail("");
          setCampoTelefone("");      
    
    
    }
  

  return (
    <>
      <S.Div>
        <h3>Novo contato:</h3>
        <S.Input
          placeholder="Nome completo"
          disabled={!estaEditando}
          value={campoNome}
          onChange={(c) => setCampoNome(c.target.value)}
        />
        <S.Input
          placeholder="E-mail"
          disabled={!estaEditando}
          value={campoEmail}
          onChange={(c) => setCampoEmail(c.target.value)}
        />
        <S.Input
          placeholder="Telefone"
          disabled={!estaEditando}
          value={campoTelefone}
          onChange={(c) => setCampoTelefone(c.target.value)}
        />
        <S.Button onClick={editaAdicionar}>
        Adicionar
        </S.Button>
  
      </S.Div>
    </>
  );
}

//export default AdicionarContato;
