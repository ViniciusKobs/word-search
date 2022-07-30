import React, { useState } from 'react';
import search from '../data/search';

const Input = (props) => {
  const [acento, setAcento] = useState(false)
  const [textInputs, setTextInputs] = useState({
    word: 'cringe',
    wordInclude: '',
    wordExclude: '',
    tokenInclude: '',
    tokenExclude: '',
  })

  const handleInput = (e) => {
    const { name, value } = e.target;
    const prev = textInputs;
    prev[name] = value;
    setTextInputs(prev);
  }

  const handleCheckbox = (e) => {
    const { checked } = e.target;
    setAcento(checked)
  }

  const handleSearchClick = () => {
    const { onClick } = props;
    const { word, wordInclude, wordExclude, tokenInclude, tokenExclude } = textInputs;
    onClick(search(word, !acento, wordInclude, wordExclude, tokenInclude, tokenExclude));
  }

    return (
      <>
        <h1 className='text-4xl text-slate-300 text-center pt-3'>Pesquisador de Palavras</h1>
        <div className='md:flex md:flex-row md:justify-evenly m-2 flex-col items-center'>
          <div className='text-slate-300 text-2xl flex flex-col items-center'>
            <div className='m-1'>
              Ignora acentuação
              <input className='ml-1' type="checkbox" name='acento' checked={acento} onChange={handleCheckbox} />
            </div>
            <div className='m-1 w-96 flex'>
              <div className='grow text-center'>Inclui</div>
              <input className='bg-zinc-700 pl-1 placeholder:text-zinc-500' name='wordInclude' onChange={handleInput} placeholder='a,b,c,d' />
            </div>
            <div className='m-1 w-96 flex'>
              <div className='grow text-center'>Exclui</div>
              <input className='bg-zinc-700 pl-1 placeholder:text-zinc-500' name='wordExclude' onChange={handleInput} placeholder='a,b,c,d'/>
            </div>
            <div className='m-1 w-96 flex'>
              <div className='grow text-center'># Inclui</div>
              <input className='bg-zinc-700 pl-1 placeholder:text-zinc-500' name='tokenInclude' onChange={handleInput} placeholder='abcd'/>
            </div>
            <div className='m-1 w-96 flex'>
              <div className='grow text-center'>! Exclui</div>
              <input className='bg-zinc-700 pl-1 placeholder:text-zinc-500' name='tokenExclude' onChange={handleInput} placeholder='abcd'/>
            </div>
            <div className='m-1 w-96 flex'>
              <div className='grow text-center'>Formato</div>
              <input className='bg-zinc-700 pl-1 placeholder:text-zinc-500' name='word' onChange={handleInput} placeholder='a?b#c!d@'/>
            </div>
            <div className='m-1 w-96 flex'>
              <button className='bg-zinc-700 ml-1 grow' onClick={handleSearchClick}>Pesquisar</button>
            </div>
          </div>
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
        </div>
      </>
    )
}

export default Input;