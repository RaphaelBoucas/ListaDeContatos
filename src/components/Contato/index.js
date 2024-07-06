import React from "react";
import * as S from "./styled";
import { useState } from "react";
//import { useSelector } from "react-redux";
import { remover, editar } from "../../redux/listaContatosSlice";
import { useDispatch } from "react-redux";



export function Contato({id, nome, email, telefone}) {
    
    const dispatch = useDispatch()
    //const listaDeContato = useSelector((state) => state.listaContatos);
        
    const [estaEditando, setEstaEditando] = useState(false);
    const [campoNome, setCampoNome] = useState(nome);
    const [campoEmail, setCampoEmail] = useState(email);
    const [campoTelefone, setCampoTelefone] = useState(telefone);



    function editarContato() {
        if (estaEditando) {
   
      dispatch(editar({
        id,
        nomeCompleto: campoNome,
        email: campoEmail,
        telefone: campoTelefone
      }));
        }
      setEstaEditando(!estaEditando)
    }

return (
  <>
    
    <S.Div>
      <S.Input
        disabled={!estaEditando}
        value={campoNome}
        onChange={(c) => setCampoNome(c.target.value)}
      />
      <S.Input
        disabled={!estaEditando}
        value={campoEmail}
        onChange={(c) => setCampoEmail(c.target.value)}
      />
      <S.Input
        disabled={!estaEditando}
        value={campoTelefone}
        onChange={(c) => setCampoTelefone(c.target.value)}
      />
      <S.Button onClick={editarContato}>
        {estaEditando ? "Salvar" : "Editar"}
      </S.Button>
      <S.Button onClick={() => dispatch(remover({ id }))}>Remover</S.Button>
    </S.Div>
  </>
);


}


//export default Contato;