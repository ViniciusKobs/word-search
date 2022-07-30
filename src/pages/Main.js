import React, { useEffect, useState } from 'react';
import Input from '../components/Input';

const Main = () => {
  const [words, setWords] = useState([]);
  const [resultsText, setResultsText] = useState('');

  useEffect(() => {
    document.title = 'Pesquisador de Palavras'
  }, []);

  const buttonClick = (results) => {
    setWords(results);
    if (results.length === 0) {
      setResultsText('nenhuma palavra encontrada')
    } else if (results.length === 1) {
      setResultsText('1 palavra encontrada')
    } else {
      setResultsText(`${results.length} palavras encontradas`)
    }
  }

  return (
    <>
      <Input onClick={buttonClick}/>
      <div className='text-center text-slate-300 mt-2'>{resultsText}</div>
      <div className='text-slate-300 flex justify-center flex-wrap'>
        { words.map((w, i) => (<span className='m-1' key={i}>{w}</span>)) }
      </div>
    </>
  )
}

export default Main;
