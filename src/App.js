import React, { useState, useEffect } from "react";

// export default function App() {
//   //sintáxe useState
//   const [count, setCount] = useState(0);

//   //sintáxe useEffect
//   //similar ao componentDidMunt e componentDidUpdate

//   // useEffect(AÇÃO A SER EXECUTADA , DEPENDO DE QUEM PARA EXECUTAR ESSA AÇÃO?) / [ ARRAY DE DEPENDENCIA]

//   useEffect(() => {
//     document.title = count;
//   }, [count]);
//   //sem array, toda mudança atualizará o document.title
//   // array vazia [] não haverá mudanças
//   // [count] array especificando, ocorrerá mudança quando clicar em um botão determinado dentro da array

//   return (
//     <>
//       <h1> Revisãozinha básica </h1>
//       <h2> {count} </h2>
//       <button onClick={() => setCount(count + 1)}> + </button>
//     </>
//   );
// }
import styled from "styled-components";

const Titulo = styled.h1`
  text-align: center;
`;

export default function App() {
  // frase inicial
  const Frase = "aloha";
  // frase separada
  const Separada = Frase.split("");
  console.log(Separada);
  // frase que será juntada
  const [Juntar, setJuntar] = useState("");

  // contador que vai acessar o índice do
  // nosso array da frase Separada
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < Separada.length) {
      setTimeout(() => {
        setCount(count + 1);
        setJuntar(Juntar.concat(Separada[count]));
      }, 260);
    }
  });

  return (
    <div>
      <Titulo>{Juntar}</Titulo>
    </div>
  );
}
