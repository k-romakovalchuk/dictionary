import React, { useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addAudit } from '../features/wordsSlice';
import { Word } from '../types/types';
import { Header } from '../components/Header';

export const WordCheck: React.FC = () => {
  const [render, setRender] = useState(1);
  const [persent, setPersent] = useState(0);
  const [word, setWord] = useState<Word>();
  const words = useAppSelector(state => state.words);

  const dispatch = useAppDispatch();

  const selectedWords = useMemo(() => {
    let result: Word[] = [];

    while (result.length !== 10) {
      const index = Math.floor(Math.random() * Math.floor(words.length));

      result.push(words[index]);
      result = result.filter((item, i, arr) => arr.indexOf(item) === i);
    }

    setWord(result[0]);

    return result;
  }, [render]);

  const [wordNumber, setWordNumber] = useState(1);

  const wordsOnEng = useMemo(() => {
    let result: string[] = [];

    if (word) {
      result.push(word.wordOnEng);
    }

    function unique(arr: string[]) {
      const uniqueMass: string[] = [];

      Object.values(arr).forEach(item => {
        if (!uniqueMass.includes(item)) {
          uniqueMass.push(item);
        }
      });

      return uniqueMass;
    }

    while (result.length !== 4) {
      const index = Math.floor(Math.random() * Math.floor(words.length));

      result.push(words[index].wordOnEng);
      result = unique(result);
    }

    result = result.sort(() => Math.random() - 0.5);

    return result;
  }, [word]);

  const handleClick = (selectWord: string) => {
    if (selectWord === word?.wordOnEng) {
      setPersent(prev => prev + 10);
    }

    if (wordNumber === 10) {
      const newDate = new Date();
      const date = `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDate()}
      ${newDate.getHours()}:${newDate.getMinutes()}`;

      dispatch(addAudit({ id: uuidv4(), progress: persent + 10, date }));
      setWordNumber(0);
      setRender(3);

      return;
    }

    setWordNumber(number => number + 1);
    setWord(selectedWords[wordNumber]);
  };

  return (
    <>
      <Header />
      <section className="section is-flex is-flex-direction-column is-align-items-center">
        {render === 2 && (
          <div className="container is-flex is-flex-direction-column is-align-items-center">
            <div className="block is-size-4">
              {wordNumber}
              .
              {' '}
              {word?.wordOnUkr}
            </div>
            <div className="buttons">
              {wordsOnEng?.map((item, i) => (
                <React.Fragment key={item}>
                  <button
                    type="button"
                    className="button is-info is-rounded is-medium"
                    onClick={() => {
                      handleClick(wordsOnEng[i]);
                    }}
                  >
                    {wordsOnEng[i]}
                  </button>
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
        <section className="section">
          {render === 3 && (
            <div className="container is-flex is-flex-direction-column is-align-items-center">
              <h1 className="title is-1">Результат</h1>
              <h2 className="title is-2">
                {persent}
                %
              </h2>
            </div>
          )}
          {(render === 1 || render === 3) && (
            <button
              type="button"
              className="button is-medium is-info is-outlined mt-5"
              onClick={() => {
                setRender(2);
                setPersent(0);
              }}
            >
              Перевірити
              {' '}
              {render === 1 ? 'слова' : 'знову'}
            </button>
          )}
        </section>
      </section>
    </>
  );
};
