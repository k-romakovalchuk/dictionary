import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from '../app/hooks';
import { addWord } from '../features/wordsSlice';
import { Header } from '../components/Header';

export const AddWord: React.FC = () => {
  const [word, setWord] = useState('');
  const [error, setError] = useState(0);
  const [translation, setTranslation] = useState('');
  const dispatch = useAppDispatch();

  return (
    <>
      <Header />
      <section className="section is-flex is-flex-direction-column is-align-items-center">
        <form>
          <div className="field">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Word"
                value={word}
                onChange={(event) => {
                  setWord(event.target.value);
                }}
                style={{ width: '400px' }}
              />
            </div>
            {(error === 1 || error === 3) && (
              <p className="help is-danger">
                This field is required
              </p>
            )}
          </div>
          <div className="field">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Translation"
                value={translation}
                style={{ width: '400px' }}
                onChange={(event) => {
                  setTranslation(event.target.value);
                }}
                required
              />
            </div>
            {(error === 2 || error === 3) && (
              <p className="help is-danger">
                This field is required
              </p>
            )}
          </div>
          <div className="control">
            <button
              className="button is-info"
              type="button"
              onClick={() => {
                if (word && translation) {
                  dispatch(addWord({ id: uuidv4(), wordOnUkr: word, wordOnEng: translation }));
                  setWord('');
                  setTranslation('');
                  setError(0);
                } else {
                  if (word === '') {
                    setError(1);
                  }

                  if (translation === '') {
                    setError(2);
                  }

                  if (word === '' && translation === '') {
                    setError(3);
                  }
                }
              }}
            >
              ADD
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
