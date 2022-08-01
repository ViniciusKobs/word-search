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
        <div className='text-slate-300 text-2xl flex flex-col items-stretch'>
          <div className='m-1'>
            Ignora acentuação
            <input className='ml-1' type="checkbox" name='acento' checked={acento} onChange={handleCheckbox} />
          </div>
          <div className='m-1 flex'>
            <div className='w-24 text-center'>Inclui</div>
            <input className='bg-zinc-700 pl-1 min-w-0 placeholder:text-zinc-500 grow' name='wordInclude' onChange={handleInput} placeholder='a,b,c,d' />
          </div>
          <div className='m-1 flex'>
            <div className='w-24 text-center'>Exclui</div>
            <input className='bg-zinc-700 pl-1 min-w-0 placeholder:text-zinc-500 grow' name='wordExclude' onChange={handleInput} placeholder='a,b,c,d'/>
          </div>
          <div className='m-1 flex'>
            <div className='w-24 text-center'># Inclui</div>
            <input className='bg-zinc-700 pl-1 min-w-0 placeholder:text-zinc-500 grow' name='tokenInclude' onChange={handleInput} placeholder='abcd'/>
          </div>
          <div className='m-1 flex'>
            <div className='w-24 text-center'>! Exclui</div>
            <input className='bg-zinc-700 pl-1 min-w-0 placeholder:text-zinc-500 grow' name='tokenExclude' onChange={handleInput} placeholder='abcd'/>
          </div>
          <div className='m-1 flex'>
            <div className='w-24 text-center'>Formato</div>
            <input className='bg-zinc-700 pl-1 min-w-0 placeholder:text-zinc-500 grow' name='word' onChange={handleInput} placeholder='a?b#c!d@'/>
          </div>
          <div className='m-1'>
            <button className='bg-zinc-700 w-full' onClick={handleSearchClick}>Pesquisar</button>
          </div>
        </div>
      </>
    )
}

export default Input;