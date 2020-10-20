import * as React from 'react';
import { useState, useCallback ,useRef} from 'react';

const WordRelay = () => {
  const [word, setWord] = useState('abc');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [test, setTest] = useState('');
  const inputEl = useRef<HTMLInputElement>(null);

  const onSubmitForm = useCallback<(e:React.FormEvent) => void>((e) => {
    e.preventDefault();
    const input = inputEl.current;
    if(word[word.length - 1] === value[0]) {
      setResult('딩동댕');
      setWord(value);
      setValue('');
      if(input) {
        input.focus();
      }
    } else {
      setResult('땡');
      setValue('');
      if(input) {
        input.focus();
      }
    }
  }, [word, value]) // word와 value가 바뀌면 함수가 새로 만들어진다. 같으면 caching했던 것 쓴다.

  const onChange = useCallback<(e: React.ChangeEvent<HTMLInputElement>) => void>
  ((e) => {
    setValue(e.currentTarget.value);
  }, [])
  
  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input
          ref = {inputEl}
          value= {value}
          onChange={onChange}
        />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

export default WordRelay;