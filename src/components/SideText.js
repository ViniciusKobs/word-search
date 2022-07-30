import React from "react";

const SideText = () => {
  return (
    <div className='text-slate-300 max-w-[40rem]'>
      <h1 className='text-2xl'>Como utilizar:</h1>
      <p className='text-justify'>Escreva uma sequencia de tokens no Formato e adicione os filtros desejados. Por conta da performance as palavras mostradas serão somente do mesmo tamanho (numero de caracteres) que o Formato</p>
      <h1 className='text-2xl'>Tokens:</h1>
      <div>? - aceita qualquer letra</div>
      <div># - aceita somente letras incluidas no filtro "# Inclui"</div>
      <div>! - aceita somente letras não incluidas no filtro "! Exclui"</div>
      <div>@ - aceita somente letras incluidas no filtro "# Inclui" e não incluidas no filtro "! Exclui"</div>
      <div>outros - aceita somente a mesma letra</div>
      <h1 className='text-2xl'>Exemplos:</h1>
      <p>???? - retorna todas as palavras de 4 letras</p>
      <p>??h?s - retorna todas as palavras de 5 letras que tem "h" no meio e terminam com "s"</p>
      <p>!??#??o Inclui:"a,lo" Exclui:"u,ma" #Inclui:"lcd" !Exclui:"aeiou" - retorna todas as palavras de 7 letras que possuem "a" e "lo", não possuem "u" e "ma", a quarta letra é "l", "c" ou "d" e não começam com uma vogal</p>
    </div>
  );
}

export default SideText;
